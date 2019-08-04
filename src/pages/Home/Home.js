import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import debouce from 'lodash.debounce';

// components
import { Grid, Card, Icon, InfiniteScroll } from '../../components';
//material
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
// css
import { colors } from '../../css';
// redux
import {
  CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_REQUEST,
} from '../../redux/characters';

const Wrapper = styled.div`
  flex: 1;
`;

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.searchCharacters = debouce(this.searchCharacters, 300);
  }

  state = {
    searchInput: '',
  };

  componentDidMount() {
    const { charactersReducer } = this.props;

    if (!charactersReducer.items.length) {
      this.fetchCharacters();
    }

    this.setState({
      searchInput: charactersReducer.nameStartsWith,
    });
  }

  renderLoading() {
    return (
      <div css="display: flex; justify-content: center; margin-bottom: 64px;">
        <Icon
          icon="spinner"
          spin
          width="24"
          height="24"
          fill={colors.v5}
          data-testid="loading-icon"
        />
      </div>
    );
  }

  renderNoHeroesFound() {
    const { charactersReducer } = this.props;

    if (charactersReducer.isLoading) {
      return null;
    }

    return (
      <div css="display: flex; justify-content: center">
        <p>
          <strong>No heroes found :(</strong>
        </p>
      </div>
    );
  }

  fetchCharacters = () => {
    this.props.dispatch({ type: CHARACTERS_REQUEST });
  };

  handleInputChange = value => {
    this.setState(
      {
        searchInput: value,
      },
      () => {
        this.searchCharacters(value);
      }
    );
  };

  searchCharacters = value => {
    this.props.dispatch({
      type: SEARCH_CHARACTERS_REQUEST,
      nameStartsWith: value,
    });
  };

  render() {
    const { charactersReducer } = this.props;

    return (
      <Wrapper data-testid="home-screen">
        <Paper className={useStyles.root}>
          <IconButton className={useStyles.iconButton} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={useStyles.input}
            placeholder="Search hero"
            onChange={e => this.handleInputChange(e.target.value)}
            value={this.state.searchInput}
          />
        </Paper>

        {!charactersReducer.items.length && this.renderNoHeroesFound()}

        <InfiniteScroll
          isLoading={charactersReducer.isLoading}
          onFetchData={this.fetchCharacters}
        >
          <Grid>
            {charactersReducer.items.map((character, i) => (
              <Grid.Item key={i}>
                <Card
                  id={character.id}
                  title={character.name}
                  imgSrc={`${character.thumbnail.path}/portrait_xlarge.jpg`}
                />
              </Grid.Item>
            ))}
          </Grid>
        </InfiniteScroll>

        {charactersReducer.isLoading && this.renderLoading()}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  charactersReducer: state.characters,
});

export default connect(mapStateToProps)(Home);
