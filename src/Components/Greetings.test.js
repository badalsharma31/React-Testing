import { render, screen } from '@testing-library/react';
import Greetings from "./Greetings";
import  userEvent from "@testing-library/user-event";

describe("Greetings component" , () => {


  test("testing hello world for greetings", () => {
    //Arrange
    render(<Greetings/>)

    //Act
      //nothing

    //Assert
    const linkItem = screen.getByText("hello world", {exact: false});

    expect(linkItem).toBeInTheDocument();

  })

  test("testing text before click", () => {
    //Arrange
    render(<Greetings/>)

    //Act
      //nothing

    //Assert
    const linkItem = screen.getByText("hello world", {exact: false});

    expect(linkItem).toBeInTheDocument();

  })

  test("testing text after click", () => {
    //Arrange
    render(<Greetings/>)

    //Act
    const buttonEle = screen.getByRole('button');
    userEvent.click(buttonEle)

    //Assert
    const linkItem = screen.getByText("Good Morning clicked", {exact: false});
    
    expect(linkItem).toBeInTheDocument();

  })

  test("does not show 'hello world' testing text after click", () => {
    //Arrange
    render(<Greetings/>)

    //Act
    const buttonEle = screen.getByRole('button');
    userEvent.click(buttonEle)

    //Assert
    
    const item1 = screen.queryByText("hello world", {exact : false});
    expect(item1).not.toBeInTheDocument();
    

  })


})
