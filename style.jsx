import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    maxWidth: 784,
  },
  all_container: {
    width: "100%",
  },
  texting: {
    fontSize: 40,
    color: "red",
  },
  header_block: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bonus_box: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 170,
    borderRadius: 16,
    overflow: "hidden",
    padding: 10,
    marginBottom: 12,
    marginTop: 30,
    backgroundColor: "#F9671C",
  },
  inner_box: {
    marginLeft: 10,
  },
  bonus_cart: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 24,
  },
  bonus_score: {
    maxWidth: 160,
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 28,
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: 20,
  },
  bonus: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 5,
  },
  bonus_img: {
    height: "100%",
    borderRadius: 10,
    image: {
      maxWidth: 180,
      height: "100%",
      borderRadius: 10,
    },
  },
  scanner_block: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  scanner_box1: {
    width: "48%",
    height: 58,
    borderRadius: 10,
    cursor: "pointer",
    overflow: "hidden",
  },
  scanner: {
    width: "48%",
    height: 58,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  scanner_score: {
    fontSize: 16,
    fontWeight: 400,
    color: "rgb(25, 25, 25)",
    marginLeft: 10,
  },
  alma_go_img: {
    width: "100%",
    height: "100%",
  },
  title_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title_page: {
    fontSize: 20,
    fontWeight: "700",
    color: "#191919",
  },
  click_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#191919",
  },
  back_button: {
    position: "relative",
    marginRight: 20,
  },
  more_left: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 0,
    left: 27,
    bottom: 0,
  },
  scroll_block_all: {
    flexDirection: "row",
    overflow: "hidden",
    gap: 10,
  },
  scroll_box: {
    width: 320,
    height: 140,
    paddingTop: 10,
    borderRadius: 16,
    overflow: "hidden",
  },
  harry_scroll_box: {
    width: 260,
    height: 260,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  harry_buy_block: {
    marginTop: 40,
    marginBottom: 100,
  },
  all_promotion_block: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
    paddingBottom: 100,
  },
  promotion_item: {
    width: "100%",
    height: 260,
    overflow: "hidden",
    borderRadius: 16,
  },
  img_promotion: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  image_promotion_id: {
    width: "100%",
    height: 260,
    borderRadius: 16,
    marginTop: 10,
  },
  header_all: {
    width: "100%",
    height: 60,
    position: "relative",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  back_button_right: {
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  more_rigth: {
    width: 24,
    height: 24,
  },
  header_name: {
    fontSize: 18,
    color: "#191919",
    fontWeight: 600,
  },
  prom_text: {
    fontSize: 18,
    fontWeight: 500,
    color: "#191919",
  },
  prom_date: {
    color: "red",
  },
  d_flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer_block: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 2,
    borderTopColor: "#E4E4E4",
  },
  footer_nav_link: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer_text: {
    fontSize: 11,
    fontWeight: 500,
    color: "#AAAAAA",
  },
  activeLink: {
    color: "#F9671C",
  },
  activeText: {
    color: "#F9671C",
  },
  cart_position: {
    width: 45,
    height: 45,
    backgroundColor: "#F9671C",
    borderRadius: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profile_block: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#F9671C",
  },
  profile_box: {
    width: "100%",
    minHeight: 600,
    backgroundColor: "white",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    bottom: 0,
    paddingTop: 16,
    paddingBottom: 150,
  },
  profile_grid_block: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  grid_item: {
    flexBasis: "49%",
    height: 110,
    backgroundColor: "#f3f5f7",
    marginBottom: 10,
    borderRadius: 10,
    paddingTop: 16,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text16: {
    fontSize: 16,
    fontWeight: 500,
    color: "#191919",
    lineHeight: 16,
  },
  header_name_profile: {
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    paddingTop: 50,
    paddingBottom: 50,
  },
  toggleBlock: {
    height: 50,
    backgroundColor: "#f5f7fa",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  settingsTitle: {
    fontSize: 16,
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  application_person_box: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F7FA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image_addtional: {
    width: 24,
    height: 24,
  },
  block_title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 12,
  },
  bt_social: {
    marginBottom: 18,
  },
  settings_all_title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#151515",
  },
  settings_block_drection: {
    flexDirection: "column",
    gap: 10,
  },
  social_network_box: {
    width: 64,
    height: 64,
    backgroundColor: "#F5F7FA",
    borderRadius: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  our_store_text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#AAAAAA",
  },
  our_store_title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#151515",
  },
  who_sales_img: {
    width: "100%",
    height: 216,
  },
  who_sales_block: {
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
  },
  who_block_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  who_box1: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F3F5F7",
    width: "48.9%",
    height: 230,
    padding: 10,
    borderRadius: 10,
  },
  who_box2: {
    width: "48.9%",
    maxHeight: 230,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  who_box_item: {
    backgroundColor: "#F3F5F7",
    height: "47.9%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  who_text16: {
    fontSize: 16,
    fontWeight: 500,
    color: "#191919",
    lineHeight: 16,
  },
  who_text_title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#000000",
    textAlign: "center",
    lineHeight: 18,
  },
  btn_all: {
    fontSize: 16,
    fontWeight: 500,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  who_btn: {
    color: "white",
    borderRadius: 50,
    backgroundColor: "#F9671C",
  },
  who_sales_settins_block: {
    flexDirection: "column",
    gap: 20,
  },
  input_box: {
    width: "100%",
    flexDirection: "column",
    position: "relative",
  },
  input: {
    height: 45,
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    color: "#191919",
    marginBottom: 5,
  },
  input_form: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    position: "relative",
  },
  input_form_mask: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "transparent",
    borderWidth: 1,
    borderBlockColor: "none",
  },
  text_registration: {
    fontSize: 14,
    fontWeight: 400,
  },
  text_login_color: {
    fontSize: 14,
    fontWeight: 400,
    color: "#F9671C",
    marginLeft: 5,
  },
  registr_box_block: {
    flexDirection: "column",
    gap: 20,
  },
  text_forgot_password: {
    textAlign: "right",
    cursor: "pointer",
  },
  registr_text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: 30,
  },
  error_text_registr: {
    fontSize: 16,
    color: "red",
    marginTop: 5,
  },
  colorAlert: {
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  crayContainer: {
    width: 5,
    height: "100%",
    borderRadius: 5,
    marginRight: 10,
  },
  crayGreen: {
    backgroundColor: "green",
  },
  crayRed: {
    backgroundColor: "red",
  },
  crayBlue: {
    backgroundColor: "blue",
  },
  crayYellow: {
    backgroundColor: "yellow",
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    paddingLeft: 10,
  },
  iconSuccess: {
    color: "green",
  },
  iconError: {
    color: "red",
  },
  iconInfo: {
    color: "blue",
  },
  iconWarning: {
    color: "orange",
  },
  iconClose: {
    color: "#333",
  },
  ab_eye: {
    position: "absolute",
    bottom: 12,
    right: 10,
    zIndex: 1,
  },
  phone_input_mask_block: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  prefix: {
    fontSize: 16,
    fontWeight: 600,
    color: "#000",
  },
  otp_input: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  otp_input_index: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    color: "#000",
    fontWeight: "500",
    marginHorizontal: 2.5,
    backgroundColor: "#e9ecef",
  },
  repeat_the_code_btn: {
    fontSize: 14,
    fontWeight: 400,
    color: "#F9671C",
    margin: "auto",
  },
});
