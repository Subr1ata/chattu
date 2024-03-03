/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Helmet} from "react-helmet-async"

const Title = ({
    title = "Chat",
    description = "this is the Chat App called Chattu"
}) => {
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
}

export default Title