import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const pfdiData = {
  "PFDI-20": {
    "instructions": "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you. Answer these by selecting the appropriate number. While answering these questions, please consider your symptoms over the last 3 months. The PFDI-20 has 20 items and 3 scales of your symptoms. All items use the following format with a response scale from 0 to 4: 0 = Not present, 1 = Not at all, 2 = Somewhat, 3 = Moderately, 4 = Quite a bit.",
    "POPDI-6": {
      "questions": [
        {
          "id": 1,
          "question": "Do you usually experience pressure in the lower abdomen?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 2,
          "question": "Do you usually experience heaviness or dullness in the pelvic area?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 3,
          "question": "Do you usually have a bulge or something falling out that you can see or feel in your vaginal area?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 4,
          "question": "Do you ever have to push on the vagina or around the rectum to have or complete a bowel movement?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 5,
          "question": "Do you usually experience a feeling of incomplete bladder emptying?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 6,
          "question": "Do you ever have to push up on a bulge in the vaginal area with your fingers to start or complete urination?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        }
      ]
    },
    "CRADI-8": {
      "questions": [
        {
          "id": 7,
          "question": "Do you feel you need to strain too hard to have a bowel movement?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 8,
          "question": "Do you feel you have not completely emptied your bowels at the end of a bowel movement?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 9,
          "question": "Do you usually lose stool beyond your control if your stool is well-formed?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 10,
          "question": "Do you usually lose stool beyond your control if your stool is loose?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 11,
          "question": "Do you usually lose gas from the rectum beyond your control?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 12,
          "question": "Do you usually have pain when you pass your stool?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 13,
          "question": "Do you experience a strong sense of urgency and have to rush to the bathroom to have a bowel movement?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 14,
          "question": "Does part of your bowel ever pass through the rectum and bulge outside during or after a bowel movement?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        }
      ]
    },
    "UDI-6": {
      "questions": [
        {
          "id": 15,
          "question": "Do you usually experience frequent urination?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 16,
          "question": "Do you usually experience urine leakage associated with a feeling of urgency (i.e., a strong sensation of needing to go to the bathroom)?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 17,
          "question": "Do you usually experience urine leakage related to coughing, sneezing, or laughing?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 18,
          "question": "Do you usually experience small amounts of urine leakage (i.e., drops)?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 19,
          "question": "Do you usually experience difficulty emptying your bladder?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        },
        {
          "id": 20,
          "question": "Do you usually experience pain or discomfort in the lower abdomen or genital region?",
          "answer_choices": ["Yes", "No"],
          "conditional": {
            "if_yes": {
              "question": "How much does this bother you?",
              "scale": [1, 2, 3, 4],
              "labels": ["Not at all", "Somewhat", "Moderately", "Quite a bit"]
            }
          }
        }
      ]
    }
  }
};

type Answer = {
  yesNo: string;
  botherLevel?: number;
};

export default function Component() {
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});

  const handleYesNoChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], yesNo: value }
    }));
  };

  const handleBotherLevelChange = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], botherLevel: value }
    }));
  };

  const renderQuestion = (question: any, index: number) => {
    const answer = answers[question.id] || {};

    return (
      <Card key={question.id} className="mb-4 w-full">
        <CardHeader>
          <CardTitle className="text-lg break-words whitespace-normal">{`${index + 1}. ${question.question}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answer.yesNo}
            onValueChange={(value) => handleYesNoChange(question.id, value)}
            className="flex flex-col space-y-1"
          >
            {question.answer_choices.map((choice: string) => (
              <div key={choice} className="flex items-center space-x-2">
                <RadioGroupItem value={choice} id={`q${question.id}-${choice}`} />
                <Label htmlFor={`q${question.id}-${choice}`}>{choice}</Label>
              </div>
            ))}
          </RadioGroup>

          {answer.yesNo === 'Yes' && (
            <div className="mt-4">
              <CardDescription>{question.conditional.if_yes.question}</CardDescription>
              <RadioGroup
                value={answer.botherLevel?.toString()}
                onValueChange={(value) => handleBotherLevelChange(question.id, parseInt(value))}
                className="flex flex-col space-y-1 mt-2"
              >
                {question.conditional.if_yes.scale.map((level: number, index: number) => (
                  <div key={level} className="flex items-center space-x-2">
                    <RadioGroupItem value={level.toString()} id={`q${question.id}-bother-${level}`} />
                    <Label htmlFor={`q${question.id}-bother-${level}`}>{question.conditional.if_yes.labels[index]}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderSection = (sectionName: string, questions: any[]) => (
    <div key={sectionName} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{sectionName}</h2>
      {questions.map((question, index) => renderQuestion(question, index))}
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', answers);
    // Here you would typically send the data to a server or perform further processing
  };

  return (
    <ScrollArea className="h-[800px] w-full rounded-md border p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <Card className="mb-8 w-full">
          <CardHeader>
            <CardTitle>PFDI-20 Questionnaire</CardTitle>
            <CardDescription className="whitespace-normal break-words">{pfdiData["PFDI-20"].instructions}</CardDescription>
          </CardHeader>
        </Card>

        {renderSection("POPDI-6",   pfdiData["PFDI-20"]["POPDI-6"].questions)}
        {renderSection("CRADI-8", pfdiData["PFDI-20"]["CRADI-8"].questions)}
        {renderSection("UDI-6", pfdiData["PFDI-20"]["UDI-6"].questions)}

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </ScrollArea>
  );
}