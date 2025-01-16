declare module "*.json" {
  const value: {
    questions: {
      id: number;
      question: string;
      answer: string;
      videoUrl: string;
    }[];
  };
  export default value;
} 