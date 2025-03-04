import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import { DownloadIcon } from "../Icons";

const Receipt = () => {
  const Receipts = [];

  for (let num = 5; num >= 1; num--) {
    Receipts.push({
      date: new Date(new Date() - Math.random() * 1e12)
        .toLocaleString("default", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .replaceAll("/", "."),
    });
  }
  return (
    <Container
      fluid
      className="p-3 px-sm-5 pt-4"
      style={{
        backgroundColor: "var(--bs-gray-200)",
        minHeight: "69.4vh",
      }}
    >
      <div className="bg-white">
        <Table responsive="sm" className="receipt">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Receipts.map((data, index) => (
              <tr key={`item-${index}`}>
                <td>Monthly subscription</td>
                <td>{data.date}</td>
                <td>R150</td>
                <td>
                  <a href="#" className="download p-1 px-2">
                    <DownloadIcon className="text-primary" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Receipt;
