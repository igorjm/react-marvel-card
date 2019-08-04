import api from './api';

class Services {
  static getCharacters(params) {
    return api.get('/v1/public/characters', params);
  }

  static getCharacter(characterId) {
    return api.get(`/v1/public/characters/${characterId}`);
  }

  static getCharacterSeries(characterId) {
    return api.get(`/v1/public/characters/${characterId}/series`);
  }
}

export default Services;
