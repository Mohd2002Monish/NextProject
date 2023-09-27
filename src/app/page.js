"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import BookCard from "../Components/BookCard";
import axios from "axios";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";

import FormLabel from "@mui/joy/FormLabel";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
const App = () => {
  const [found, setFound] = useState(false);
  const [layout, setLayout] = React.useState(undefined);
  const [scroll, setScroll] = React.useState(true);

  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({
    authorName: "",
    authorBiography: "",
    authorNationality: "",
    authorBirthDate: "",
    title: "",
    coverImage: "",
    genre: "Fantasy",
    publicationDate: "2023-09-08",
    isFree: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const FetchData = async () => {
    setFound(false);
    try {
      const response = await axios.get(
        `https://wednesday-qcez.onrender.com/books?page=${currentPage}`
      );

      const { data } = response;
      setFound(true);
      setBooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookData);
    axios
      .post(`https://wednesday-qcez.onrender.com/books`, bookData)
      .then((response) => {
        console.log("POST request successful", response.data);
        setLayout(undefined);
        FetchData();
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "isFree") {
      setBookData({ ...bookData, [name]: event.target.value === "true" });
    } else {
      setBookData({ ...bookData, [name]: value });
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    FetchData();
  }, [currentPage]);
  return (
    <div>
      {found ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setLayout("center");
              }}
            >
              Add New Book
            </Button>
            <Modal
              open={!!layout}
              onClose={() => {
                setLayout(undefined);
              }}
            >
              <ModalDialog layout={layout}>
                <ModalClose />

                <FormControl
                  orientation="horizontal"
                  sx={{
                    bgcolor: "background.level2",
                    p: 1,
                    borderRadius: "sm",
                  }}
                >
                  <FormLabel>New Book Detail's</FormLabel>
                </FormControl>
                <List
                  sx={{
                    overflow: scroll ? "scroll" : "initial",
                    mx: "calc(-1 * var(--ModalDialog-padding))",
                    px: "var(--ModalDialog-padding)",
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="authorName"
                      label="Author Name"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />

                    <TextField
                      sx={{ marginTop: "20px" }}
                      name="authorBiography"
                      label="Author Biography"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />

                    <TextField
                      sx={{ marginTop: "20px" }}
                      name="authorNationality"
                      label="Nationality"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />

                    <TextField
                      sx={{ marginTop: "20px" }}
                      name="authorBirthDate"
                      label="Birth Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      sx={{ marginTop: "20px" }}
                      name="title"
                      label="Title"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />

                    <TextField
                      sx={{ marginTop: "20px" }}
                      name="coverImage"
                      label="Cover Image URL"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />

                    <FormControl sx={{ marginTop: "20px" }} fullWidth>
                      <InputLabel>Genre</InputLabel>
                      <Select
                        name="genre"
                        onChange={handleChange}
                        label="Genre"
                      >
                        <MenuItem value="Fantasy">Fantasy</MenuItem>
                        <MenuItem value="Science Fiction">
                          Science Fiction
                        </MenuItem>
                        <MenuItem value="Mystery">Mystery</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      sx={{ marginTop: "20px" }}
                      component="fieldset"
                      fullWidth
                    >
                      <RadioGroup name="isFree" onChange={handleChange}>
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Free"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="Not Free"
                        />
                      </RadioGroup>
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </form>
                </List>
              </ModalDialog>
            </Modal>
          </div>
          <Grid container spacing={2}>
            {books.map((book) => (
              <Grid key={book._id} item xs={12} sm={6} md={4} lg={3}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            item
            xs={12}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Grid>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </div>
  );
};

export default App;
