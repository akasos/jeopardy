import Grid from "@mui/material/Grid2";
import {jeopardyCategories} from "../data/jeopardyData";
import {Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {Category, Question} from "../types";
import {useState} from "react";
import QuestionDialog from "./QuestionDialog.tsx";

const JeopardyBoard = () => {

    const [jc, sjc] = useState<Category[]>(jeopardyCategories)
    const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
    const [openDialog, setOpenDialog] = useState(false)

    const handleQuestionClick = (question: Question) => {
        if(!question.isAnswered) {
        setOpenDialog(true)
        setSelectedQuestion(question)}
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        sjc(jc.map((category) => {
            return {
                ...category,
                questions: category.questions.map((question) => {
                    if (question == selectedQuestion) {
                        return {
                            ...question,
                            isAnswered: true
                        }
                    }
                    return question
                })
            }
        }))
        setSelectedQuestion(null)
    }

    return (
        <Box
            sx={{
                backgroundColor: '#000', // Black background
                flex: 1, // Allow the board to grow to fill the screen
                minHeight: '100vh', // Full-screen height
                padding: 4, // Add padding around the board
            }}
        >
            <Grid container spacing={2}>
                {jc.map((category) => (
                    <Grid key={category.name} size={{ xs: 2 }}>
                        <Box sx={{mb: 2}}>
                            <Card sx={{
                            backgroundColor: '#071277',
                            color: '#fff',
                            }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    textAlign="center"
                                    noWrap
                                    sx={{ mb: 0, fontSize: { xs: "1rem", sm: '1.5rem', md: '2.5rem', lg: "3.5rem" }}}
                                >
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Box>
                        <Grid container>
                        {category.questions.map((question) => (
                        <Grid key={question.points} size={{ xs: 12 }}>
                            <Box onClick={() => handleQuestionClick(question)} sx={{mb: 2}} >
                                <Card sx={{backgroundColor: '#071277'}}>
                                <CardActionArea disabled={question.isAnswered}>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            textAlign="center"
                                            sx={
                                            {
                                                color: '#D69F4C',
                                                mb: 0,
                                                opacity: question.isAnswered ? 0 : 1,
                                                fontSize: { xs: "1rem", sm: '1.5rem', md: '2.5rem', lg: "3.5rem" }
                                            }}>
                                            $ {question.points}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </Box>
                        </Grid>
                    ))}
                        </Grid>
                        </Grid>
                ))}
            </Grid>
            <QuestionDialog onClose={handleCloseDialog} open={openDialog} question={selectedQuestion ?? {} as Question} />
        </Box>
    )
}


export default JeopardyBoard