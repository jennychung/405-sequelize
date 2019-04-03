const frisby = require('frisby');

const { Joi } = frisby;

it('should return a status of 200 when the track is found', () => {
return frisby
  .get('http://localhost:8000/api/tracks/5')
  .expect('status', 200');
});

it('should return a status of 404 when the track does not exist', () => {
  return frisby
  .get('http://localhost:8000/api/tracks/-1')
  .expect('status', 404');
});


it('should return the track name and its playlist', () => {
  return frisby
  .get('http://localhost:8000/api/tracks/5')
  .expect('json', 'name', 'Princess of the Dawn')
  .expect('jsonTypes', 'playlists.*', {
    //for each playlist in there, i expect this general structure
    id: Joi.number().required(),
    name: Joi.string().required()
  });
});
