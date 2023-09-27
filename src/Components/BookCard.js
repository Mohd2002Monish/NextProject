import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
const BookCard = ({ book }) => {
  return (
    <Link sx={{ TextDecoder: "none" }} href={`/Book/${book._id}`}>
      <Card>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              flexDirection: "row-reverse",
            }}
          >
            <div>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body2">Author: {book.authorName}</Typography>
            </div>
            <div>
              <CardMedia
                sx={{ borderRadius: "18px" }}
                component="img"
                height="150px"
                width="200px"
                image={book.coverImage}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
