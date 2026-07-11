// این مسیر قبلاً کپی تکراری از /panel بود — هدایت به مسیر اصلی
export default function AgencyGroup() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/panel",
      permanent: false,
    },
  };
}
