"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Updated to use react-router-dom
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { subjects } from "@/notes/data"; // Importing the subjects data
import { Subject } from "@/notes/types"; // Importing the Subject type
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
const ITEMS_PER_PAGE = 9;

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredSubjects, setFilteredSubjects] =
    useState<Subject[]>(subjects); // Explicit type for filteredSubjects
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate(); // Updated to use react-router-dom

  useEffect(() => {
    handleSearch();
  }, [selectedCourse, selectedYear, selectedSubjects, searchTerm]); // Added searchTerm to dependency array

  const handleSearch = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call

    const filtered = subjects.filter(
      (subject: Subject) =>
        (subject.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          subject.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          subject.units.some(
            (unit: any) =>
              unit.unit_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              unit.topics.some((topic: any) =>
                topic.topic_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
          )) &&
        (selectedCourse === "" || subject.course === selectedCourse) &&
        (selectedYear === "" || subject.year === selectedYear) &&
        (selectedSubjects.length === 0 ||
          selectedSubjects.includes(subject.id))
    );

    setFilteredSubjects(filtered);
    setCurrentPage(1);
    setLoading(false);
  };

  const handleViewNotes = (subjectId: string) => {
    navigate(`/notes/${subjectId}`); // Updated to use react-router-dom
  };

  const totalPages = Math.ceil(filteredSubjects.length / ITEMS_PER_PAGE);
  const paginatedSubjects = filteredSubjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col bg-background">
        <header className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              className="pt-40 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              LogPeers Study Notes
            </motion.h1>
            <motion.p
              className="mt-4 text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Access comprehensive study materials for your courses.
              Filter by course, year, and subjects to find exactly
              what you need.
            </motion.p>
          </div>
        </header>
        <main className="container mx-auto flex-1 px-4 py-8 md:px-6 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <form
              className="grid gap-6 mb-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <Label htmlFor="course">Course</Label>
                  <Select
                    value={selectedCourse}
                    onValueChange={setSelectedCourse}
                  >
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="engineering">
                        Engineering
                      </SelectItem>
                      <SelectItem value="mathematics">
                        Mathematics
                      </SelectItem>
                      <SelectItem value="physics">
                        Physics
                      </SelectItem>
                      <SelectItem value="chemistry">
                        Chemistry
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Select
                    value={selectedYear}
                    onValueChange={setSelectedYear}
                  >
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">
                        1st Year
                      </SelectItem>
                      <SelectItem value="2">
                        2nd Year
                      </SelectItem>
                      <SelectItem value="3">
                        3rd Year
                      </SelectItem>
                      <SelectItem value="4">
                        4th Year
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subjects">Subjects</Label>
                  <Select
                    value={selectedSubjects.join(",")}
                    onValueChange={(value) =>
                      setSelectedSubjects(value.split(","))
                    }
                  >
                    <SelectTrigger id="subjects">
                      <SelectValue placeholder="Select subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject: Subject) => (
                        <SelectItem
                          key={subject.id}
                          value={subject.id}
                        >
                          {subject.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search subjects, topics, or keywords..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                {loading ? (
                  <Skeleton className="h-6 w-24" />
                ) : (
                  "Search Study Materials"
                )}
              </Button>
            </form>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Available Study Materials
              </h2>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton
                      key={i}
                      className="h-[300px] w-full"
                    />
                  ))}
                </div>
              ) : paginatedSubjects.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginatedSubjects.map((subject, index) => (
                      <motion.div
                        key={subject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                        }}
                      >
                        <Card className="flex flex-col h-full">
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={subject.imageUrl}
                              alt={subject.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>
                              {subject.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="line-clamp-3">
                              {subject.description}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Course: {subject.course}{" "}
                              | Year: {subject.year}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              onClick={() =>
                                handleViewNotes(
                                  subject.id
                                )
                              }
                            >
                              View Notes
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage((prev) =>
                                Math.max(
                                  prev - 1,
                                  1
                                )
                              );
                            }}
                          />
                        </PaginationItem>
                        {[...Array(totalPages)].map(
                          (_, index) => (
                            <PaginationItem key={index}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(
                                    index + 1
                                  );
                                }}
                              >
                                {index + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )
                        )}
                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage((prev) =>
                                Math.min(
                                  prev + 1,
                                  totalPages
                                )
                              );
                            }}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </>
              ) : (
                <p>
                  No study materials found for the selected
                  filters.
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
    </>
  );
}
