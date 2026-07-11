import { getService } from "services/ristpanel";
const db = require("../model");
const Service = db.service;
const dotenv = require("dotenv");
dotenv.config();

class ServicesControllers {
  async getServiceByID(id) {
    try {
      let service = await Service.findByPk(id, { raw: true });
      return service;
    } catch (e) {
      console.log(e);
    }
  }
  async getServiceByServiceUniq(serviceUniqueId) {
    try {
      const service = await Service.findOne({
        where: { serviceUniqueId: serviceUniqueId },
      });
      return service;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getServiceByType(typeId) {
    let services;
    if (typeId) {
      services = await Service.findAll({
        where: {
          is_trashed: "0",
          CityCode: "351",
          enumEventCategory: typeId,
        },
      });
    } else
      services = await Service.findAll({
        where: {
          is_trashed: "0",
          CityCode: "351",
        },
      });

    return services;
  }

  async insertDatabase(data) {
    try {
      let dataQuery = await Service.findAll();

      await Promise.all(
        data.map(async (d) => {
          let ff = dataQuery.find((x) => {
            return (
              x.serviceUniqueId.toString() === d.serviceUniqueId.toString()
            );
          });
          if (!ff) {
            try {
              const rr = await getService(d.serviceUniqueId);
              await Service.create({
                serviceUniqueId: d.serviceUniqueId,
                title: rr.data.title,
                description: rr.data.description,
                rules: rr.data.rules,
                eventCategory: rr.data.eventCategory,
                coverImage: rr.data.coverImage,
                enumEventCategory: rr.data.enumEventCategory,
                stateCode: rr.data.stateCode,
                cityCode: rr.data.cityCode,
              });
            } catch (err) {
              console.log(err);
            }
          }
        })
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ServicesControllers;
