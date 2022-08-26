import axios from "axios";
import Card from "../../components/Card";
import Head from "next/head";
export default function Channel({ channel }) {
  return (
    <div className="main">
      <Head>
        <title>Channel</title>
      </Head>
      <Card
        _id={channel._id}
        title={channel.title}
        all_users={channel.all_users}
        online_users={channel.online_users}
        total_messages={channel.total_messages}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const response = await axios.get(
    `http://localhost:3000/api/getChannelInfo/${_id}`
  );
  const channel = response.data;
  return {
    props: { channel }
  };
}