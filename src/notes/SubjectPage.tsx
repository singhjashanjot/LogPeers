import { useState } from "react";
import { ChevronLeft, Download, Eye, Book } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";  // Import useParams hook
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { subjects } from "./data";
import { PDFViewer } from "@/components/molecules/PDFViewer";

export default function SubjectPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();  // Get subjectId from URL params
  const subject = subjects.find((s) => s.id === subjectId);  // Use subjectId from params
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
          <Button onClick={() => navigate("/notes")}>Back to Notes</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => navigate("/notes")} className="mr-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Notes
            </Button>
            <h1 className="text-3xl font-bold text-foreground">{subject.title}</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{subject.title}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Course: {subject.course}</p>
                    <p className="text-sm text-muted-foreground">Year: {subject.year}</p>
                  </div>
                  <img src={subject.imageUrl} alt={subject.title} className="w-32 h-32 object-cover rounded-md" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Chapters and Notes</h2>
            <Accordion type="single" collapsible className="w-full">
              {subject.units.map((unit, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold">{unit.unit_name}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {unit.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          className="flex items-center justify-between p-2 bg-muted rounded-md"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                        >
                          <span className="flex items-center">
                            <Book className="w-4 h-4 mr-2" />
                            {topic.topic_name}
                          </span>
                          <div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2"
                              onClick={() => setSelectedNote(topic.notes_link)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(topic.notes_link, '_blank')}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <footer className="bg-muted py-6 text-center text-muted-foreground">
        <p>&copy; 2024 LogPeers. All rights reserved.</p>
      </footer>
      {selectedNote && (
        <PDFViewer pdfUrl={selectedNote} onClose={() => setSelectedNote(null)} />
      )}
    </div>
  );
}
