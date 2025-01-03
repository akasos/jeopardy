import {Button, Dialog, DialogActions, DialogContent, Stack, Typography} from "@mui/material";
import {Question} from "../types";
import {useState} from "react";

interface QuestionDialogProps {
    question: Question;
    onClose: () => void;
    open: boolean;
}

const QuestionDialog = ({question, onClose ,open }: QuestionDialogProps) => {

    const [showAnswer, setShowAnswer] = useState(false)

    const handleClose = () => {
        setShowAnswer(false)
        onClose()
    }

    const handleShowAnswer = () => {
        setShowAnswer(true)
    }

    return (
        <Dialog
            fullWidth
            open={open}
            PaperProps={{
                sx: {
                    width: '1000px',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    height: '500px',
                    background: 'radial-gradient(circle, #0B61F9, #093EA9, #061D60)', // Radial gradient
                    color: "#FFFDFF", // Text color for contrast
                },
            }}
        >
            <DialogContent sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography gutterBottom textAlign="center" sx={{fontSize: { xs: "1rem", sm: '1.5rem', md: '2rem' }}}>
                    {question.questionText}
                </Typography>
                <Stack
                    sx={{
                        mt: 2,
                        minHeight: '100px', // Reserve space for additional text
                        display: 'flex',
                        alignItems: 'center', // Vertically center the additional text within the reserved space
                    }}
                >
                    {showAnswer && (
                        <>
                            <Typography textAlign="center" sx={{ mb: 1, fontSize: { xs: "1rem", sm: '1.5rem', md: '2rem' }}}>
                                Answer
                            </Typography>
                            <Typography textAlign="center" sx={{ fontSize: { xs: "1rem", sm: '1.5rem', md: '2rem' }}}>
                                {question.answer}
                            </Typography>
                        </>
                    )}
                </Stack>
            </DialogContent>
            <DialogActions>
                {!showAnswer ? <Button onClick={handleShowAnswer} sx={{
                    width: 150,
                    height: 50,
                    minWidth: 100,
                    maxWidth: 200,
                }}>Show Answer</Button> : <Button onClick={handleClose} sx={{
                    width: 150,
                    height: 50,
                    minWidth: 100,
                    maxWidth: 200,
                }}>Close</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default QuestionDialog;