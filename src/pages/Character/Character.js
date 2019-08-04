import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

// css
import { media, colors } from '../../css';
// redux
import { CHARACTER_REQUEST } from '../../redux/character';
// components
import { Avatar, Grid, Card, Icon } from '../../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  ${media.xs`
    flex-direction: row;
    align-items: start;
  `};
`;

const Description = styled.div`
  margin-top: 10px;
  max-width: 100%;

  ${media.xs`
    max-width: 65%;
  `};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 18px;
  ${media.xs`
    align-items: start;
    padding-top: 0;
  `};
`;

class Character extends React.Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.dispatch({ type: CHARACTER_REQUEST, characterId: params.id });
  }

  renderLoading() {
    return (
      <Wrapper data-testid="character-screen">
        <div css="display: flex; justify-content: center;">
          <Icon
            icon="spinner"
            spin
            width="24"
            height="24"
            fill={colors.v5}
            data-testid="loading-icon"
          />
        </div>
      </Wrapper>
    );
  }

  renderNoSeriesFound() {
    return (
      <div css="display: flex; justify-content: center">
        <p>
          <strong>No series found :(</strong>
        </p>
      </div>
    );
  }

  render() {
    const { characterReducer } = this.props;

    if (!characterReducer.data || characterReducer.isLoading) {
      return this.renderLoading();
    }

    return (
      <Wrapper>
        <Header>
          <Avatar
            imgSrc={`${characterReducer.data.thumbnail.path}/portrait_xlarge.jpg`}
          />
          <HeaderContent>
            <h1>{characterReducer.data.name}</h1>
            <Description>
              {characterReducer.data.description || 'No description :('}
            </Description>
          </HeaderContent>
        </Header>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Series</h2>
          <Grid>
            {characterReducer.series.map((serie, i) => (
              <Grid.Item key={i}>
                <Card
                  id={i}
                  as="div"
                  title={serie.title}
                  imgSrc={`${serie.thumbnail.path}/portrait_xlarge.jpg`}
                />
              </Grid.Item>
            ))}
          </Grid>
          {!characterReducer.series.length && this.renderNoSeriesFound()}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  characterReducer: state.character,
});

export default connect(mapStateToProps)(Character);
