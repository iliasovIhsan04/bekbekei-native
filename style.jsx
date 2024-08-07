import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    maxWidth: 784,
    backgroundColor: "transparent",
  },
  texting: {
    fontSize: 40,
    color: "red",
  },
  main: {
    overflow: "hidden",
  },
  header_block: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
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
    margin: "auto",
    resizeMode: "center",
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
    marginBottom: 200,
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
  },
  image_promotion_id: {
    width: "100%",
    height: 260,
  },
});
