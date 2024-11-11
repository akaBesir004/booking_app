import Heading from '@/components/Heading';
import RoomCard from '@/components/RoomCard';
import getAllRooms from './actions/getAllRooms';

export default async function Home() {
  const rooms = await getAllRooms();

  return (
    <div>
      <Heading title='Available Rooms'></Heading>
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard room={room} key={room.$id} />
        ))
      ) : (
        <p>No Rooms Available At The Moment</p>
      )}
    </div>
  );
}
