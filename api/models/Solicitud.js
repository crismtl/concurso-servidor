/**
 * Solicitud.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    sol_ci: {
      type: 'string',
      unique: true,
      required: true,
      maxLength: 10
    },
    sol_apellidos: {
      type: 'string',
      required: true,
      maxLength: 50

    },
    sol_nombres: {
      type: 'string',
      required: true,
      maxLength: 50

    },
    sol_codprov: {
      type: 'integer',
      required: true,
      maxLength: 2
    },
    sol_codciu: {
      type: 'integer',
      required: true,
      maxLength: 4
    },
    sol_sexo: {
      type: 'string',
      required: false,
      maxLength: 1
    },
    sol_fechanac: {
      type: 'date',
      required: true,
    },
    sol_nummiem: {
      type: 'integer',
      required: true,
      maxLength: 2
    },
    sol_disc: {
      type: 'boolean',
      required: false
    },
    sol_telefono: {
      type: 'string',
      required: false,
      maxLength: 15
    },
    sol_fecha: {
      type: 'date',
      required: true
    },
    sol_estado: {
      type: 'string',
      required: true,
      maxLength: 1
    }
  }
};
