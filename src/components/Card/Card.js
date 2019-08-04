import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const Anchor = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${p => p.theme.colors.v5};
  }

  &::before {
    content: '';
    display: block;
    padding-bottom: 150%; /* aspect ratio */
    background-color: ${p => p.theme.colors.v3};
    border-radius: 4px;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Info = styled.div`
  padding: 8px 0;
`;

const CardHero = ({ id, imgSrc, title, ...rest }) => (
  <Anchor to={`/character/${id}`} {...rest} data-testid="card">
    <Img src={imgSrc} alt="Hero" />
    <Info>
      <strong>{title}</strong>
    </Info>
  </Anchor>

  // <Card className={useStyles.card}>
  //   <CardActionArea>
  //     <CardMedia
  //       className={useStyles.media}
  //       image={imgSrc}
  //       alt="Hero"
  //       title="Contemplative Reptile"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="h2">
  //         <strong>{title}</strong>
  //       </Typography>
  //     </CardContent>
  //   </CardActionArea>
  // {/* <CardActions>
  //   <Button size="small" color="primary">
  //     Share
  //     </Button>
  //   <Button size="small" color="primary">
  //     Learn More
  //     </Button>
  // </CardActions> */}
  // </Card>
);

CardHero.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default CardHero;
