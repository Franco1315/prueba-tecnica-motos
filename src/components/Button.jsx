const Button = (props) => {
  return (
    <button className='bg-yellow text-dark italic py-2 px-6 uppercase font-bold md:ml-8 hover:bg-white duration-500'>
      {props.children}
    </button>
  )
}

export default Button