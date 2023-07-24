import * as React from "react";
import ContactForm from "../components/container/ContactForm";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <ContactForm></ContactForm>
  )
};

export default IndexPage;
