import PropTypes from "prop-types";

const ProfileCard = ({ name, email, description, imageUrl }) => {
  return (
    <div className='w-full lg:w-1/3 px-2 mb-4 flex'>
      <div className='border rounded-lg flex flex-col items-center p-4 flex-grow'>
        <div className='text-start flex-start text-xl font-bold mb-4'>
          <h1>My Profile</h1>
        </div>

        <div className='flex-grow flex items-center justify-center mb-4'>
          <img
            src={imageUrl}
            alt='Profile'
            className='h-32 w-32 object-cover rounded-full'
          />
        </div>

        <div className='text-center text-lg font-semibold mb-2'>
          <h2>{name}</h2>
        </div>

        <div className='text-center text-md font-medium mb-2 italic'>
          <h5>{email}</h5>
        </div>

        <div className='text-center text-sm text-gray-600'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  name: "John Doe",
  email: "example@example.com",
  description: "No description provided.",
  imageUrl: "https://via.placeholder.com/150",
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ProfileCard;

