const SIZE = {
  mobile: '320px',
  tablet: '600px',
  laptop: '1024px',
};
const DEVICE = {
  mobile: `screen and (min-width: ${SIZE.mobile})`,
  tablet: `screen and (min-width: ${SIZE.tablet})`,
  laptop: `screen and (min-width: ${SIZE.laptop})`,
};
export default DEVICE;
