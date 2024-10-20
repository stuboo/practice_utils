This repository currently contains files related to the Pelvic Floor Disorders Index (PFDI-20), including various formats of the questionnaire. The PFDI-20 is widely used to assess symptoms related to pelvic organ prolapse, colorectal-anal distress, and urinary distress. Over time, additional tools and resources related to pelvic floor disorders and urogynecologic care may be added to this repository.

# PFDI-20
  
## What is the PFDI-20?  
  
The Pelvic Floor Disorders Index (PFDI-20) is a validated questionnaire designed to assess the presence and severity of symptoms related to pelvic organ prolapse, colorectal-anal symptoms, and urinary distress. It consists of 20 questions, divided into three scales:  
  
- Pelvic Organ Prolapse Distress Inventory (POPDI-6)
- Colorectal-Anal Distress Inventory (CRADI-8)
- Urinary Distress Inventory (UDI-6)  

Patients are asked to report if they experience specific symptoms and, if so, how much these symptoms bother them. The PFDI-20 is widely used in clinical settings to track the impact of pelvic floor disorders on a patient’s quality of life and to guide treatment decisions.  
  
Barber MD, Walters MD, Bump RC. Short forms of two condition-specific quality-of-life questionnaires for women with pelvic floor disorders (PFDI-20 and PFIQ-7). Am J Obstet Gynecol. 2005 Jul;193(1):103-13. doi: [10.1016/j.ajog.2004.12.025](https://pubmed.ncbi.nlm.nih.gov/16021067/). PMID: 16021067.  
  
---  
  
This repository contains files related to the Pelvic Floor Disorders Index (PFDI-20), including a simple JSON version and a conditional JSON format that reflects the conditional nature of certain survey questions.  
### Files  
  
- **PFDI-20.md**: The markdown version of the PFDI-20 questionnaire. This includes questions related to pelvic organ prolapse, colorectal-anal symptoms, and urinary distress symptoms, with answer scales from 0 to 4.  
  
- **pfdi_simple.json**: A simple JSON version of the PFDI-20. This version represents the questions in a straightforward manner, using a 0-4 scale for each question.  
  
- **pfdi_conditional.json**: A more advanced JSON format that includes conditional logic for certain questions. Symptom-related questions are answered with Yes/No, and if the answer is "Yes," a follow-up question is asked regarding the severity of the symptom (i.e., "How much does this bother you?").  
  
### Usage  
  
- The `pfdi_simple.json` file can be used for basic data collection or display of PFDI-20 questions in applications that don’t require conditional logic.  
    
- The `pfdi_conditional.json` file is designed for more advanced applications where conditional questions are necessary. For example, if a respondent answers "Yes" to experiencing a symptom, the system can prompt a follow-up question to assess how much that symptom bothers the respondent.