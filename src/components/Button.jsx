const Button = (props) => {
  return (
    <button className='bg-yellow text-dark italic py-1 text-md px-6 uppercase font-bold md:ml-8 hover:bg-white duration-500'>
      {props.children}
    </button>
  )
}

export default Button