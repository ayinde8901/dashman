import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../Theme";  // Assuming tokens are part of a custom theme setup

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define FAQ data to dynamically generate accordions
  const faqData = [
    { question: "How does the dashboard work?", answer: "The dashboard provides an overview of your data and allows you to manage it easily." },
    { question: "Can I customize the dashboard?", answer: "Yes, you can customize it to suit your needs using various widgets and settings." },
    { question: "How do I add new data?", answer: "Click on the 'Add Data' button at the top right to insert new entries." },
    { question: "What types of data are supported?", answer: "You can manage text, numerical, and image data types on the dashboard." },
    { question: "Is there a tutorial available?", answer: "Yes, a tutorial is available under the 'Help' section to guide you through all features." }
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions for the Dashboard" />
      <Box mt="20px">
        {faqData.map((faq, index) => (
          <Accordion key={index} defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
