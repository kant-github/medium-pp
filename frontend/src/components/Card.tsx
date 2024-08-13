// CardComponent.jsx

import './Card.css'; // Import the CSS file

export const Card = () => {
    const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae soluta, cupiditate adipisci obcaecati cumque in debitis laboriosam nam assumenda unde nostrum suscipit ad ex. Quo soluta eaque recusandae ipsam, blanditiis ipsa error maxime ipsum nulla explicabo obcaecati eum ducimus labore deleniti necessitatibus voluptatum, eligendi ullam totam facilis maiores. Possimus neque, minus iusto error voluptatibus iste voluptate perspiciatis ducimus commodi soluta, delectus deserunt incidunt aspernatur culpa in enim laborum nesciunt architecto nisi libero totam quos? Saepe quas ratione neque veniam esse ex aut eligendi odit facere eaque. Dolorem atque nam aperiam repellat fugit eligendi, beatae temporibus facere ipsum quaerat fugiat!"
  return (
    <div className="card">
      <div className="header">
        <div className="top">

          <div className="circle">
            <span className="red circle2"></span>
          </div>

          <div className="circle">
            <span className="yellow circle2"></span>
          </div>

          <div className="circle">
            <span className="green circle2"></span>
          </div>
          
        </div>
      </div>

      <div className="card-containe flex flex-col gap-3  m-7 ">

            <div className='author mt-1 flex items-center  gap-2 text-md font-thin italic'>
                <span className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full text-2xl font-bold">{"R"}</span>
                <div className=''>Rishi Kant</div>
            </div>

            <div className='mt-2 text-2xl font-bold'>
                Stop doind tutorials, Learn programming like this !!
            </div>

            <div className=' font-thin text-md'>
               {
                `${string.substring(0, 400)}...`
               }
            </div>

            <div className='mt-3'>
                12 July 2018
            </div>

      </div>

    </div>
  );
};

