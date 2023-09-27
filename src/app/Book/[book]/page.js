"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { useRouter } from "next/navigation";
import { Grid } from "@mui/joy";
function Page({ params }) {
  const [found, setFound] = useState(false);
  const [book, setBook] = useState({});
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [bookData, setBookData] = useState({
    authorName: "",
    authorBiography: "",
    authorNationality: "",
    authorBirthDate: "",
    title: "",
    coverImage: "",
    genre: "Fantasy",
    publicationDate: "",
    isFree: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://wednesday-qcez.onrender.com/book/${params.book}`, bookData)
      .then((response) => {
        console.log("PUT request successful", response.data);
        setOpen(false);
        FetchData();
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
      });
  };
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const removeBook = (id) => {
    axios
      .delete(`https://wednesday-qcez.onrender.com/book/${id}`)
      .then((response) => {
        console.log("Delete request successful", response.data);
        router.push("/");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  useEffect(() => {
    const FetchData = async () => {
      setFound(false);
      try {
        const response = await axios.get(
          `https://wednesday-qcez.onrender.com/book/${params.book}`
        );
        const { data } = response;
        setBook(data);
        setBookData(data);
        setFound(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchData();
  }, []);
  return (
    <div>
      {found ? (
        <div>
          {" "}
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            {" "}
            <Card
              sx={{
                display: "flex",
                maxWidth: 600,
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                alt={book.title}
                height="600px"
                image={book.coverImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author: {book.authorName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Biography: {book.authorBiography}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nationality: {book.authorNationality}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Birth Date: {book.authorBirthDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Genre: {book.genre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Publication Date: {book.publicationDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.isFree ? "Free" : "Not Free"}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            {" "}
            <div>
              <Modal sx={{ height: "800px" }} open={open} onClose={handleClose}>
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Make Changes To Book
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 4 }}
                    >
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Author Name"
                              name="authorName"
                              variant="outlined"
                              value={bookData.authorName}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Author Biography"
                              name="authorBiography"
                              variant="outlined"
                              multiline
                              rows={4}
                              value={bookData.authorBiography}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Author Nationality"
                              name="authorNationality"
                              variant="outlined"
                              value={bookData.authorNationality}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Author Birth Date"
                              name="authorBirthDate"
                              variant="outlined"
                              value={bookData.authorBirthDate}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Title"
                              name="title"
                              variant="outlined"
                              value={bookData.title}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Cover Image URL"
                              name="coverImage"
                              variant="outlined"
                              value={bookData.coverImage}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Genre"
                              name="genre"
                              variant="outlined"
                              value={bookData.genre}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Publication Date"
                              name="publicationDate"
                              variant="outlined"
                              value={bookData.publicationDate}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Is Free"
                              name="isFree"
                              variant="outlined"
                              value={bookData.isFree}
                              onChange={handleInputChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Box textAlign="center">
                              <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                Save
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </form>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "20px",
              gap: "20px",
            }}
          >
            <Button variant="outlined" color="success" onClick={handleOpen}>
              Update Book{" "}
            </Button>
            <Button
              onClick={() => removeBook(book._id)}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </div>
  );
}

export default Page;
