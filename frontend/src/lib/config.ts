import uuidv4 from "uuid/v4";

const environment = "development";

const configs = {
  common: {
    environment,
    run: uuidv4(), // Unique ID for the duration of this app run
    endpoints: {
      api: "http://localhost:3001"
    },
    keys: {
      local_storage_key: "@APP_KEY"
    }
  },
  development: {
    endpoints: {
      api: "http://localhost:3001"
    }
  },
  staging: {
    endpoints: {
      api: "#"
    }
  },
  production: {
    endpoints: {
      api: "#"
    }
  }
};

export default {
  ...configs["common"],
  ...configs[environment]
};
