const color = {
  alabaster: '#fafafa',
  black: '#000000',
  cinnabar: '#ee4d2d',
  concrete: '#f3f3f3',
  dark: 'rgba(0, 0, 0, 0.8)',
  darkAccent: 'rgba(0, 0, 0, 0.54)',
  dustyGray: '#999999',
  eastBay: '#566278',
  empress: '#757575',
  light: 'rgba(0, 0, 0, 0.05)',
  malachite: '#fb5533',
  nero: '#222222',
  nobel: '#999999',
  white: '#ffffff',
};

const theme = {
  header: {
    bg_color: 'linear-gradient(-180deg, #f53d2d, #f63)',
    color: color.white,
  },
  sectionHeader: {
    bg_color: color.white,
    color: color.darkAccent,
  },
  loading: {
    layer_color: color.black,
    loader_color: color.dustyGray,
    loader_progress_color: color.concrete,
  },
  categories: {
    bg_color: color.white,
    header_color: color.darkAccent,
    color: color.dark,
    border_color: color.light,
    border_hover_color: color.light,
    border_hover_shadow: '0 0 0.8125rem 0 rgb(0 0 0 / 5%)',
  },
  products: {
    item_bg_color: color.white,
    item_hover_shadow: '0 0.0625rem 20px 0 rgb(0 0 0 / 5%)',
    price_color: color.cinnabar,
    old_price_color: color.darkAccent,
  },
  productDetail: {
    bg_color: color.white,
    shadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
    name_color: color.dark,
    price_bg_color: color.alabaster,
    price_color: color.cinnabar,
    old_price_color: color.darkAccent,
    desc_color: color.nero,
    desc_label_color: color.empress,
    add_card_btn_color: color.cinnabar,
    add_card_btn_bg_color: 'rgba(208, 1, 27, 0.08)',
    add_card_btn_shadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
    buy_now_btn_bg_color: color.cinnabar,
    buy_now_btn_color: color.white,
    buy_now_btn_shadow: '0 1px 1px 0 rgb(0 0 0 / 9%)',
  },
  searchBar: {
    bg_color: color.white,
    shadow: '0 0.125rem 0.25rem rgb(0 0 0 / 9%)',
    btn_bg_color: color.malachite,
    btn_color: color.white,
    btn_shadow: '0 1px 1px 0 rgb(0 0 0 / 9%)',
  },
  sideBar: {
    active_color: color.cinnabar,
  },
  notFound: {
    bg_color: color.white,
    shadow: '0px 1px 1px 0px rgb(0 0 0 / 20%)',
    title_color: color.eastBay,
    content_color: color.nobel,
  },
};

export default theme;
