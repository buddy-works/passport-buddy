/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = Number(json.id);
  profile.displayName = json.name;

  profile.emails = json.emails
    .filter(function(email){
      return email.confirmed;
    })
    .map(function(email){
      return {
        value: email.email
      };
    });

  return profile;
};
