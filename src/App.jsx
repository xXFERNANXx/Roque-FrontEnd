import star from "/star.svg";
import { useQuery } from "@tanstack/react-query";
// import navbar from "./navbar.jsx";

async function fetchAnimesAll() {
  const response = await fetch("/api/animes");
  const text = await response.text();
  try {
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    throw new Error("Error parsing JSON: " + error.message);
  }
}

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animes"],
    queryFn: fetchAnimesAll,
    staleTime: 5000
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {console.log(error.message)}</p>;

  return (
    <>
      <div className="max-w-screen p-2 grid lg:grid-cols-3 md:grid-cols-2 text-left">
        {data?.map((anime) => (
          <div className="p-4">
            <div key={anime.id} className="indicator">
              <span className="indicator-item badge badge-primary text-white">
                <img src={star} alt="star" width="20" height="20" />
                {anime.averageScore}/10
              </span>
              <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body bg-white text-black rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span
                      className={`badge badge-xs text-white ${
                        anime.ageRating == "+13"
                          ? "badge-success"
                          : anime.ageRating == "+16"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      Clasificación: {anime.ageRating}
                    </span>
                    <span className="text-xl"></span>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold text-primary">
                      {anime.title}
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-2 text-xs">
                    <li className="flex flex-col gap-2 text-xs">
                      <div className="text-center py-4">
                        <span className="font-bold text-2xl text-secondary">
                          Aquí iría la imagen..... si tan solo el server tuviera
                        </span>
                      </div>
                      <span className="font-bold text-2xl text-secondary">
                        Estatus:
                      </span>
                      <ul className="steps text-secondary">
                        <li
                          className={`step flex flex-col ${
                            anime.endDate !== null
                              ? "step-error"
                              : "step-warning"
                          }`}
                        >
                          Anunciado
                          <span className="text-xs"></span>
                        </li>
                        <li
                          className={`step flex flex-col ${
                            anime.endDate !== null
                              ? "step-error"
                              : "step-warning"
                          }`}
                        >
                          Emisión
                          <span className="text-xs">{anime.releaseDate}</span>
                        </li>
                        <li
                          className={`step flex flex-col ${
                            anime.endDate !== null ? "step-error" : ""
                          }`}
                        >
                          Finalizado
                          <span className="text-xs">
                            {anime.endDate !== null ? (
                              anime.endDate
                            ) : (
                              <span className="text-xs">En emisión</span>
                            )}
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="flex justify-center mt-3">
                    <button
                      className="btn btn-secondary w-full"
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${anime.id}`)
                          .showModal()
                      }
                    >
                      Descripción
                    </button>
                    <dialog
                      id={`my_modal_${anime.id}`}
                      className="modal"
                    >
                      <div className="modal-box bg-white w-7/12 max-w-5xl">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold text-4xl text-primary">
                            Sinopsis
                          </h3>
                          <h3 className="font-bold text-2xl text-primary">
                            {anime.type !== "TV" ? (
                              anime.type
                            ) : (
                              <span className="text-font-bold text-2xl text-primary">
                                Serie
                              </span>
                            )}
                          </h3>
                        </div>
                        <div className="flex justify-center flex-row">
                          <div className="stats shadow">
                            <div className="stat">
                              <div className="font-bold stat-title text-1xl text-secondary">
                                Numero de episodios:
                              </div>
                              <div className="stat-value text-error">
                                {anime.episodeCount}
                              </div>
                            </div>
                          </div>
                          <div className="stats shadow">
                            <div className="stat">
                              <div className="font-bold stat-title text-1xl text-secondary">
                                Duración promedio por episodio:
                              </div>
                              <div className="stat-value text-error">
                                {anime.episodeDuration} Min
                              </div>
                            </div>
                          </div>
                          <div className="stats shadow">
                            <div className="stat">
                              <div className="font-bold stat-title text-1xl text-secondary">
                                Temporada:
                              </div>
                              <div className="stat-value text-error">
                                {anime.season}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="py-4 text-lg text-secondary">{anime.synopsis}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-error">
                              Cerrar
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
