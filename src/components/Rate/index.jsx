import { Container } from "./styles"
import { AiFillStar, AiOutlineStar} from "react-icons/ai";

export function Rate({ data }){
  switch(data.grade){
    case 1:
      return(
        <Container>
          <li><AiFillStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
        </Container>
      )
      break
    case 2:
      return(
      <Container>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
      </Container>)
      break
    case 3:
      return(
      <Container>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
    </Container>)
    break
    case 4:
      return(
      <Container>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiOutlineStar/></li>
    </Container>)
    break
    case 5:
      return(
      <Container>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
      </Container>)
    break
    default:
      return(
      <Container>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
      </Container>)
      break        
  }
}