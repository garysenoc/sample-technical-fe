import PropTypes from "prop-types";

const ActivityList = ({ activities }) => {
  return (
    <div className='w-full px-2 mb-4 flex'>
      <div className='border rounded-lg p-4 flex items-center justify-center flex-grow overflow-auto w-full max-w-full max-h-full'>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div>
              <h2 className='text-2xl font-semibold leading-tight'>
                Recent Activities
              </h2>
            </div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Date | Time
                      </th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Status
                      </th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity, index) => (
                      <tr
                        key={index}
                        className='transition-transform hover:scale-105 hover:bg-gray-100'
                      >
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {activity.dateTime}
                          </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                          <span
                            className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                              activity.status === "Logged in"
                                ? "text-green-900"
                                : activity.status === "Updated Profile"
                                ? "text-orange-900"
                                : "text-red-900"
                            }`}
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-0 ${
                                activity.status === "Logged in"
                                  ? "bg-green-200"
                                  : activity.status === "Updated Profile"
                                  ? "bg-orange-200"
                                  : "bg-red-200"
                              } opacity-50 rounded-full`}
                            ></span>
                            <span className='relative'>{activity.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      dateTime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ActivityList;

