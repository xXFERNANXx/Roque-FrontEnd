import star from "/star.svg";

function App() {
  return (
    <div className="w-screen mx-auto p-8 grid grid-cols-3 text-left">
      <div className="indicator">
        <span className="indicator-item badge badge-primary">
          <img src={star} alt="star" width="20" height="20" />
          8.9/10
        </span>
        <div className="card w-96 bg-base-100 shadow-2xl">
          <div className="card-body bg-white text-black rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="badge badge-xs badge-error text-white">
                Clasificación: 16+
              </span>
              <span className="text-xl"></span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold text-primary">
                Death March to the Parallel World Rhapsody
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
                  <li className="step step-success flex flex-col">
                    Anunciado
                    <span className="text-xs"></span>
                  </li>
                  <li className="step flex flex-col">
                    Emisión
                    <span className="text-xs">2024-07-01</span>
                  </li>
                  <li className="step flex flex-col">
                    Finalizado
                    <span className="text-xs">2024-07-01</span>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-center mt-3">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Descripción
              </button>
              <dialog id="my_modal_1" className="modal text-black">
                <div className="modal-box bg-white w-7/12 max-w-5xl">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-4xl">Sinopsis</h3>
                    <h3 className="font-bold text-2xl">Película</h3>
                  </div>
                  <div className="flex justify-center flex-row">
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="font-bold stat-title text-black text-1xl">
                          Numero de episodios:
                        </div>
                        <div className="stat-value text-secondary">12</div>
                      </div>
                    </div>
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="font-bold stat-title text-black text-1xl">
                          Duración promedio por episodio:
                        </div>
                        <div className="stat-value text-secondary">24 Min</div>
                      </div>
                    </div>
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="font-bold stat-title text-black text-1xl">
                          Temporada:
                        </div>
                        <div className="stat-value text-secondary">
                          Verano 2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="py-4">
                    Ichiro Suzuki, conocido como "Satou", es un programador en
                    plena marcha fúnebre. Cuando un día se despierta después de
                    lo que supuestamente iba a ser una siesta normal, se
                    encuentra en otro mundo... Lo que ve ante él parece la
                    pantalla del menú del juego en el que estaba trabajando
                    antes de dormirse, y es un novato de nivel 1. Por suerte
                    tiene acceso a la nueva función de "mostrar todo el mapa"
                    que acababa de implementar para ayudar a los novatos y tres
                    usos de la magia "Lluvia de meteoritos", la cual puede
                    acabar con todos los enemigos de un mapa completo.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-secondary">Cerrar</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
