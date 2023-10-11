import React, { useState, useEffect } from "react";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow, hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ actions }) => (
  <HelloWorld fetchProperties={actions.fetchCrmObjectProperties} />
));

const HelloWorld = ({ runServerless, fetchProperties }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobtitle] = useState("");

  useEffect(() => {
    fetchProperties(["firstname", "lastname", "company","jobtitle"]).then((properties) => {
      setFirstName(properties.firstname);
      setLastName(properties.lastname);
      setCompany(properties.company);
      setJobtitle(properties.jobtitle);
    });
  }, [fetchProperties]);

  return (
    <Table bordered={true} paginated={true} pageCount="1">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Value</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
          <TableCell>
            Name
          </TableCell>
          <TableCell>{firstName} {lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Company
          </TableCell>
          <TableCell>{company}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Job Title
          </TableCell>
          <TableCell>{jobTitle}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
