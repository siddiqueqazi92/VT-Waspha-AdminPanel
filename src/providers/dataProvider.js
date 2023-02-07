import _ from "lodash";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

import { API_URL, RESOURCE_TYPES, RESOURCES } from "../constants";

const apiUrl = API_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  var auth = localStorage.getItem("auth");
  if (!auth) {
    return Promise.reject();
  }

  const { access_token } = JSON.parse(auth);
  //console.log(access_token);
  options.method = "POST";
  options.headers.set("Authorization", `Bearer ${access_token}`);
  //debugger;
  return fetchUtils.fetchJson(url, options);
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const isValidUrl = (url) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
};

export default {
  // getList: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([{ field, order }]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify(params.filter),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   return httpClient(url).then(({ headers, json }) => {
  //     return {
  //       data: json.data,
  //       total: json.data.length,
  //     };

  //     // total: parseInt(headers.get('content-range').split('/').pop(), 10),
  //   });
  // },
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    let { field, order } = params.sort;
    console.log(order);
    order = "DESC";
    const query = {
      sort: JSON.stringify([{ field, order }]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    console.log({ params111: JSON.stringify(query) });
    const url = `${apiUrl}/${resource}/${RESOURCE_TYPES.GET}?${stringify(
      query
    )}`;

    return httpClient(url).then(({ headers, json }) => {
      if (json.data.length) {
        return {
          data: json.data,
          total: json.data[0].total || 0,
        };
      } else {
        return {
          data: [],
          total: 0,
        };
      }

      // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    });
  },

  getOne: (resource, params) => {
    // console.log({ paramsDatainUpdate: params });
    return httpClient(
      `${apiUrl}/${resource}/${RESOURCE_TYPES.GET}/${params.id}`
    ).then(({ json }) => {
      if (json.data) {
        //json.data.createdAt = moment(json.data.createdAt).format(DATE_FORMAT1);
        // const _image = {
        //   src: json.data.image,
        // };

        //json.data.image = _image;
        return {
          data: json.data,
          id: params.id,
        };
      } else {
        return {
          data: [],
          total: 0,
        };
      }

      // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    });
  },
  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}/${RESOURCE_TYPES.GET}?${stringify(
      query
    )}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data,
      id: json.data.id,
    }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([{ field, order }]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}/${RESOURCE_TYPES.GET}?${stringify(
      query
    )}`;

    return httpClient(url).then(({ headers, json }) => {
      console.log({ headers: headers.get("Content-Range") });
      if (json.data.length) {
        return {
          data: json.data,
          total: json.data[0].total || 0,
        };
      } else {
        return {
          data: [],
          total: 0,
        };
      }

      // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    });
    // return httpClient(url).then(({ headers, json }) => ({
    //   data: json,
    //   total: json.data.total,
    // }));
  },

  update: async (resource, params) => {
    console.log({
      imag111: params.data.secondary_image,
      valid: isValidUrl(params.data.secondary_image),
    });
    switch (resource) {
      case RESOURCES.CATEGORIES: {
        if (!_.isUndefined(params.data.image) && !_.isNull(params.data.image)) {
          if (!isValidUrl(params.data.image)) {
            await convertFileToBase64(params.data.image).then((base64Image) => {
              params.data.image = base64Image;
            });
          }
        }
        if (
          !_.isUndefined(params.data.secondary_image) &&
          !_.isNull(params.data.secondary_image) &&
          !isValidUrl(params.data.secondary_image)
        ) {
          await convertFileToBase64(params.data.secondary_image).then(
            (base64Image) => {
              params.data.secondary_image = base64Image;
            }
          );
        }

        break;
      }
      case RESOURCES.DRIVERS: {
        if (
          !_.isUndefined(params.data.avatar) &&
          !_.isNull(params.data.avatar) &&
          !isValidUrl(params.data.avatar)
        ) {
          await convertFileToBase64(params.data.avatar).then((base64Image) => {
            params.data.avatar = base64Image;
          });
        }
        break;
      }

      case RESOURCES.DELIVERY_VEHICLES: {
        if (!_.isUndefined(params.data.image) && !_.isNull(params.data.image)) {
          if (!isValidUrl(params.data.image)) {
            await convertFileToBase64(params.data.image).then((base64Image) => {
              params.data.image = base64Image;
            });
          }
        }
        if (
          !_.isUndefined(params.data.color_image) &&
          !_.isNull(params.data.color_image) &&
          !isValidUrl(params.data.color_image)
        ) {
          await convertFileToBase64(params.data.color_image).then(
            (base64Image) => {
              params.data.color_image = base64Image;
            }
          );
        }

        break;
      }
      case RESOURCES.ADS: {
        if (
          !_.isUndefined(params.data.media.en) &&
          !_.isNull(params.data.media.en)
        ) {
          if (!isValidUrl(params.data.media.en)) {
            await convertFileToBase64(params.data.media.en).then(
              (base64Image) => {
                params.data.media.en = base64Image;
              }
            );
          }
        }
        if (
          !_.isUndefined(params.data.media.ar) &&
          !_.isNull(params.data.media.ar) &&
          !isValidUrl(params.data.media.ar)
        ) {
          await convertFileToBase64(params.data.media.ar).then(
            (base64Image) => {
              params.data.media.ar = base64Image;
            }
          );
        }

        if (!_.isUndefined(params.data.category)) {
          params.data.category_id = params.data.category.id;
          delete params.data.category;
        }
        if (!_.isUndefined(params.data.subcategory)) {
          params.data.subcategory_id = params.data.subcategory.id;
          delete params.data.subcategory;
        }
        break;
      }
      case RESOURCES.STORE_CATEGORIES:
      case RESOURCES.STORE_PRODUCTS: {
        if (
          !_.isUndefined(params.data.image) &&
          !_.isNull(params.data.image) &&
          !isValidUrl(params.data.image)
        ) {
          await convertFileToBase64(params.data.image).then((base64Image) => {
            params.data.image = base64Image;
          });
        }
        if (
          !_.isUndefined(params.data.image_ar) &&
          !_.isNull(params.data.image_ar) &&
          !isValidUrl(params.data.image_ar)
        ) {
          await convertFileToBase64(params.data.image_ar).then(
            (base64Image) => {
              params.data.image_ar = base64Image;
            }
          );
        }
        break;
      }
    }

    return (
      httpClient(
        `${apiUrl}/${resource}/${RESOURCE_TYPES.UPDATE}/${params.id}`,
        {
          method: "POST",
          body: JSON.stringify(params.data),
        }
      ) //then(({ json }) => {
        //   return <Redirect to="cancellation-reasons" />;
        // });
        .then(({ json }) => ({ data: json.data, id: json.data.id }))
    );
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {
    //console.log({ params: params });

    if (resource === "categories") {
      if (!_.isUndefined(params.data.image)) {
        await convertFileToBase64(params.data.image).then((base64Image) => {
          params.data.image = base64Image;
        });
      }
      if (!_.isUndefined(params.data.secondary_image)) {
        await convertFileToBase64(params.data.secondary_image).then(
          (base64Image) => {
            params.data.secondary_image = base64Image;
          }
        );
      }
    }
    switch (resource) {
      case RESOURCES.PROMO_CODES: {
        if (
          !_.isUndefined(params.data.image) &&
          !_.isUndefined(params.data.image.en)
        ) {
          await convertFileToBase64(params.data.image.en).then(
            (base64Image) => {
              params.data.image.en = base64Image;
            }
          );
        }
        if (
          !_.isUndefined(params.data.image) &&
          !_.isUndefined(params.data.image.ar)
        ) {
          await convertFileToBase64(params.data.image.ar).then(
            (base64Image) => {
              params.data.image.ar = base64Image;
            }
          );
        }
        break;
      }
      case RESOURCES.DELIVERY_VEHICLES: {
        if (!_.isUndefined(params.data.image)) {
          await convertFileToBase64(params.data.image).then((base64Image) => {
            params.data.image = base64Image;
          });
        }
        if (!_.isUndefined(params.data.color_image)) {
          await convertFileToBase64(params.data.color_image).then(
            (base64Image) => {
              params.data.color_image = base64Image;
            }
          );
        }
        break;
      }
      case RESOURCES.USERS:
      case RESOURCES.ADMINS: {
        let contact = {};
        contact.number = params.data.contact.phone.substring(2);
        contact.country_code = "+" + params.data.contact.dialCode;
        params.data.contact = contact;
        break;
      }
      case RESOURCES.ADS: {
        if (
          !_.isUndefined(params.data.media) &&
          !_.isUndefined(params.data.media.en)
        ) {
          await convertFileToBase64(params.data.media.en).then(
            (base64media) => {
              params.data.media.en = base64media;
            }
          );
        }
        if (
          !_.isUndefined(params.data.media) &&
          !_.isUndefined(params.data.media.ar)
        ) {
          await convertFileToBase64(params.data.media.ar).then(
            (base64media) => {
              params.data.media.ar = base64media;
            }
          );
        }
        break;
      }
      case RESOURCES.STORE_CATEGORIES:
      case RESOURCES.STORE_PRODUCTS: {
        if (!_.isUndefined(params.data.image)) {
          await convertFileToBase64(params.data.image).then((base64Image) => {
            params.data.image = base64Image;
          });
        }
        if (!_.isUndefined(params.data.image_ar)) {
          await convertFileToBase64(params.data.image_ar).then(
            (base64Image) => {
              params.data.image_ar = base64Image;
            }
          );
        }
        break;
      }
    }

    return httpClient(`${apiUrl}/${resource}/${RESOURCE_TYPES.ADD}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      console.log({ json1111: json });
      if (json.status === true) {
        return {
          data: { ...params.data, id: json.data.id },
        };
      }
      return Promise.reject();
    });
    // return httpClient(`${apiUrl}/${resource}/${RESOURCE_TYPES.ADD}`, {
    //   method: "POST",
    //   body: JSON.stringify(params.data),
    // }).then(({ json }) => ({
    //   data: { ...params.data, id: json.data.id },
    // }));
  },

  delete: (resource, params) => {
    return httpClient(
      `${apiUrl}/${resource}/${RESOURCE_TYPES.DELETE}/${params.id}`,
      {
        method: "POST",
      }
    ).then(({ json }) => ({ data: json }));
  },

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(
      `${apiUrl}/${resource}/${RESOURCE_TYPES.DELETE}?${stringify(query)}`,
      {
        method: "DELETE",
        body: JSON.stringify(params.data),
      }
    ).then(({ json }) => ({ data: json.data }));
  },
};
