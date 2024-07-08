import { useState } from "react";
import { useRouter } from "expo-router";

import axios from "axios";

export default function usePractice() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [practiceSubject, setPracticeSubject] = useState("");

  const router = useRouter();

  const getQuestions = async (subject: string) => {
    setPracticeSubject(subject);
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/questions/`);
      setQuestions(response.data);
      setIsLoading(false);
      router.push({
        pathname: "session",
        params: { subject, data: response.data },
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    questions,
    practiceSubject,
    getQuestions,
  };
}
