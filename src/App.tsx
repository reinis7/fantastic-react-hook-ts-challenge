import React, { FC } from "react";
import { Table } from "reactstrap";
import useFetch from "./hooks/useFetch";

import "./App.css";
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const App: FC = ({}) => {
  const { status, data: comments, error } = useFetch<Comment[]>(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div className="table-container">
      <h1>Comments</h1>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {status === "fetching" && (
            <tr>
              <td>Fetching Data</td>
            </tr>
          )}

          {status === "fetched" && comments && comments.length > 0 ? (
            <React.Fragment>
              {comments.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </React.Fragment>
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
