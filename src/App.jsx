import "./App.css";
import { Center, Button, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <Center height="100vh">
        <Stack spacing={6} direction="column" align="center" maxW="85%">
          <Heading as="h2" size="xl" textAlign="center">
            {t("text")}
          </Heading>
          <Button onClick={toggleLanguage} colorScheme="teal" size="lg">
            {t("button")}
          </Button>
        </Stack>
      </Center>
    </div>
  );
}

export default App;
