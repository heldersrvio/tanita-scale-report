import logo from '../assets/logo_gessiane.png';

const Report = (_props) => {
    return (
        <div>
            <img className="logo" alt="Gessiane Sérvio" src={logo} />
            <h1>Análise da Composição Corporal</h1>

            <div class="report">
                <div class="report-header">
                    <div class="report-column">
                        <table cellSpacing={0}>
                            <tbody>
                                <tr>
                                    <td class="label" colSpan={1} width={0.2}><strong>Nome</strong></td>
                                    <td class="data" colSpan={22} width={0.8}></td>
                                </tr>
                                <tr>
                                    <td class="label" colSpan={1} width={0.1}><strong>Idade</strong></td>
                                    <td class="data" colSpan={5} width={0.2}></td>
                                    <td class="label" colSpan={1} width={0.1}><strong>Sexo</strong></td>
                                    <td class="data" colSpan={10} width={0.3}></td>
                                    <td class="label" colSpan={1} width={0.1}><strong>Altura</strong></td>
                                    <td class="data" colSpan={5} width={0.2}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="report-column datetime-column">
                        <table cellSpacing={0}>
                            <tbody>
                                <tr>
                                    <td class="label"><strong>Data/Hora</strong></td>
                                    <td class="data"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2>Resultados</h2>
                <div class="report-main">
                    <div class="report-table" id="body-composition-table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan={2}>Avaliação</th>
                                    <th>Resultado</th>
                                    <th>Ideal</th>
                                    <th>Classificação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan={2}>Peso (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Índice de Massa Corporal (IMC)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td rowspan={2} colspan={1}>Gordura corporal</td>
                                    <td colSpan={1} class="label-cell">Percentual (%)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={1}>Peso (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Massa Livre de Gordura (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Gordura Visceral (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Massa Muscular (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td rowspan={2} colspan={1}>Músculo Esquelético</td>
                                    <td colSpan={1} class="label-cell">% do peso</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={1}>Índice (kg/m2)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Avaliação Física</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Massa Óssea (kg)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="report-chart" id="muscle-mass-chart">
                        <h3>Percentual de Gordura Corporal Segmentada</h3>
                        <div class="chart-container">
                            <div class="chart">
                                <div class="chart-quadrant">
                                    <span>%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="human">
                                <span class="body-data-label">Tronco</span>
                                <span class="body-data"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="humanbody"><circle cx="256" cy="79.838" r="48" fill="#ffffff" class="color000000 svgShape"></circle><path d="M424 144H88c-13.255 0-24 10.745-24 24s10.745 24 24 24h98.451c5.579 1 13.197 3.837 17.216 14.252 4.651 12.056 2.37 33.606-.539 51.727l-3.775 21.395-.058.311-.004.02-30.375 172.268c-2.303 13.053 6.414 25.5 19.467 27.803 13.055 2.301 25.333-6.416 27.634-19.471L237 340.348v.167S243.25 308 255.452 308h1.096C269 308 275 340.515 275 340.515v-.083l20.983 119.913c2.301 13.055 14.663 21.749 27.718 19.448 13.053-2.303 21.728-14.762 19.425-27.814L312.73 279.703c-.002-.008-.013-.02-.015-.027-.019-.104-.044-.217-.063-.322l-3.777-21.414c-2.909-18.121-5.191-39.631-.541-51.688C312.354 195.838 319.97 193 325.549 192H424c13.255 0 24-10.745 24-24s-10.745-24-24-24z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                            </div>
                            <span class="hand-indication">Direita</span>
                        </div>
                    </div>
                    <div class="report-table" id="fat-table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan={2}>Água Corporal</th>
                                    <th>Resultado</th>
                                    <th>Ideal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan={2}>Percentual (%)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan={2}>Peso (kg)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="report-chart" id="fat-chart">
                        <h3>Massa Muscular Segmentada</h3>
                        <div class="chart-container">
                            <div class="chart">
                                <div class="chart-quadrant">
                                    <span>kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>kg</span>
                                </div>
                            </div>
                            <div class="human">
                                <span class="body-data-label">Tronco</span>
                                <span class="body-data"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="humanbody"><circle cx="256" cy="79.838" r="48" fill="#ffffff" class="color000000 svgShape"></circle><path d="M424 144H88c-13.255 0-24 10.745-24 24s10.745 24 24 24h98.451c5.579 1 13.197 3.837 17.216 14.252 4.651 12.056 2.37 33.606-.539 51.727l-3.775 21.395-.058.311-.004.02-30.375 172.268c-2.303 13.053 6.414 25.5 19.467 27.803 13.055 2.301 25.333-6.416 27.634-19.471L237 340.348v.167S243.25 308 255.452 308h1.096C269 308 275 340.515 275 340.515v-.083l20.983 119.913c2.301 13.055 14.663 21.749 27.718 19.448 13.053-2.303 21.728-14.762 19.425-27.814L312.73 279.703c-.002-.008-.013-.02-.015-.027-.019-.104-.044-.217-.063-.322l-3.777-21.414c-2.909-18.121-5.191-39.631-.541-51.688C312.354 195.838 319.97 193 325.549 192H424c13.255 0 24-10.745 24-24s-10.745-24-24-24z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                            </div>
                            <span class="hand-indication">Direita</span>
                        </div>
                    </div>
                    <div class="report-table" id="muscle-fat-control-table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan={2}>Condição Atual</th>
                                    <th>Resultado</th>
                                    <th>Classificação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan={2}>Taxa Metabólica Basal (kcal)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan={2}>Ingestão Calórica Diária (kcal)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan={2}>Idade Metabólica (anos)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="report-footer">
                <span><strong>Gessiane Sérvio</strong> - Nutricionista</span>
            </div>
        </div>
    )
};

export default Report;
