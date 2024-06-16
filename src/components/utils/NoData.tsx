import { Empty } from "antd";

interface NoDataProps {
  text: string;
}

function NoData({ text }: NoDataProps) {
  return (
    <Empty
      style={{ margin: "0 auto" }}
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description={<span style={{ color: "gray" }}>{text}</span>}
    ></Empty>
  );
}

export default NoData;
