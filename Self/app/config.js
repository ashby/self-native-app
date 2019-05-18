const HIGHER_POWER_API_URL = 'http://localhost:3200';

const ENV = APP_ENV || 'qa'; // eslint-disable-line no-undef
const isProd = ENV === 'prod';

const envPrefix = isProd ? '' : `${ENV}.`;

export default {
    ENV,
    HIGHER_POWER_API_URL: HIGHER_POWER_API_URL,
};
