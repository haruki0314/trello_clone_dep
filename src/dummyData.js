import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "😀 今からやること",
    tasks: [
      {
        id: uuidv4(),
        title: "react学習",
      },
      {
        id: uuidv4(),
        title: "資料作成",
      },
      {
        id: uuidv4(),
        title: "お客様にメール",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "今後やること",
    tasks: [
      {
        id: uuidv4(),
        title: "ポートフォリオ作成",
      },
      {
        id: uuidv4(),
        title: "退職願",
      },
      {
        id: uuidv4(),
        title: "上司にメール",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "終了タスク",
    tasks: [
      {
        id: uuidv4(),
        title: "優しいJAVAを読む",
      },
      {
        id: uuidv4(),
        title: "DDDの本を読む",
      },
      {
        id: uuidv4(),
        title: "データ構造の本を読む",
      },
    ],
  },
];
export default dummyData;
