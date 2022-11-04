import useLoading from "../../hooks/useLoading.hook";
import Loading from "./loading.component";

function LoadingContainer() {
  const { loading } = useLoading();

  return <>{loading && <Loading />}</>;
}

export default LoadingContainer;
