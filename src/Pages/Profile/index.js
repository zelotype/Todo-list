import React, { Component } from 'react';
import Styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ImageUploader from '../../components/ImageUploader';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ImageWrapper = Styled.div`
  height: 200px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: inline-block;
  padding: 8px;
`;

const Image = Styled.img`
  height: 100%;
`;

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            member: {
                firstName: 'Kawisara',
                lastName: 'Bunyen',
                imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUVFRUXGBUXFxcVFRgVFxUXFxgVFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQMEBQIGBwj/xAA/EAABAwIEAwYEAwUIAgMAAAABAAIRAyEEEjFBBVFhBhMicYGRBzKhsULB8FJictHxFBUjM4KSosKj4UNTY//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAiEQEBAAICAwEAAgMAAAAAAAAAAQIREiEDMUFRBBMiMnH/2gAMAwEAAhEDEQA/AORJUJVuyCEJUAiVKhAIlQhACEJQgEQlQmCJUQlCARKAhbn8MuC069Z1SqA5lIZsp0LvwzzE7b+4QVulr2I7B960Vq7crNswOZ2k5Ra371+YOw6TguG4egPAwCNzttadE7jK0NDhoBoP1dR8NgHVPE8kDZo19Ss8qrDHdZYuo0gw6/KQmW40thzgdL73ynX9bq2w/D6bbBv5p2rQbFgs+P627UdPi9MmCTM7iAdtTtNlZ0HA7+vMnVMupRMiQdQVkMEGEObMfszYXU8deit/WOJ4ZSqtAc3Q5mkahxFyP1sq1uENEwbj7i8HzEQroPmBtY+xslxlPM3qLpXWXR424qvi/Dm4ihUpOi7C9jtcr2izuvUbgkLz9xH/ADHdSCY0kgE/WV6OowKcH9lwPlded+JYUh7t4MWHoD9vdbeHfFn5NcjOEqQVsuDrhwhark6j7/ayfpYgt3WmnL5fFvuNvNJsSmO+EwFQ/wB5HmnMHjL3W2Pk087zeHOY9TTY2VU1UI2TLagjULNhW+OeN9PPzzy1rI4oONBiymyoeNq2V53/ABR4t8umv4ppUIqbiqsqGVwV9J/H3w7YoSoUugiEqEBglQgJkEISoASqVw/h76xeKYk06bqpG5YwjNHMjNMcgUmNwFSlk7xsd5TZVYZBDqb/AJXAg9DbURdMIyEIQAhCVAIhKhAIlCISgIAXSfhKJZiG/tOpj0Ek/Rc4DSuk/CZpaKxIgRrfmI+x9k4jP06Kx2Y22P23VrQiFqmH4rkYHFjzNy4NJF/yAVtguIB4lp/Jc9ym3XhhZiuZSvcqTG8WbTEulLg+NCpcMeRzgqLlGn9d1tZVVg+sCI/X9UxUxbXAxqNQbFV1WWkOmxOvI7I5aRlgk0MSc0ONthaSVZ8vK/1VNSxTD4g3xDW0X6fWysaNWGy6xN/IbD7LHlqnZ0j4qmLtPyuaRbkRBhcU7a8MdRxDmuEZrtIEZm2E9Rtqu54kWafT6LV+2fDWYjD1GEeOndh1IJFo89I3j1XX4svjn8k+uHuaQkUmvRIbqDBFxexH/rdRlqmdhZMdCxhCCslSG4twU3C8RKqkBErDyfxfHnNabRTxbTumcXUbGqo6dchTadSdU92/Xn5/xf6+0HEFR1NxTAoZSr0/BZcSISwkSbEQlQkBUZBWKv8AtbwZ2HquadiCDzYbA+hsfRUKqxMu4RKEKTw3BmtVp0WkNdVe2m0kSA57g0TG0kINvnwz7OuaHcRqBwZTa7umyAKsh7KgeCJLYsBuT0U74jdmaeG4fTAcT3OILaOa7hRq53GiXT4gHCQTBAEdT0XA8Pp06QoMtTY1rAOjR97GSqf4oOaOGYjM2f8AKA6ONamA4eUlUzltrgCEFCloEQlQgEQlhKgEStQsmgboB+k8kgAOJO0k/QR911DsXhXUsI975BcTAF7ENkwOjZ13J3XPeA4TvKlwclgWgw95J8NMG13EH0a4/hXbuD8OgCmTLWAgn9p5+Z1ttQPJO3WKNbykaRhu3eJbUph+FHdVQ7KxoPeNa0uAm0Sctm21F10DhLW1Ie0eFzQ4EWkG4KkM4Y1pzF9Q9C45R6BTsK2ATGq5vrvt60peOVBRY+qWZgxpJAEzGgHUm3qtJ4Z2xx76r2jDtAYJylrwCPFYVLiYDdQJLhtddNMOEFNM4cyZl/lnfHtMJaXKp+BcWbim5jRqUnjVlRpaR1DtHDyKsatMBpB+X8lZd00aKHxEAtI6KanLu9KoUG5g6R0dzHJZY192z8ogkczNh5c+dgssLQtPr/7CWpOjgBPyvFxM2kcuazkl7LV9JYdmZ11VFxx/hrH/APME87ObH3Kt6Ni0+c+sfyWudthlpYlx+Q0qQHOTVOYeRyt9yt/DO2Hl9OQ40+IwZJMmSLkSJjrr/qUMhPSDq6epBB+k/VJUp+sbi8t5nyXSxnRlCVCRkQlhIgBZNqELFCCs37K55KwSlIkcknoiEqQoMISoSJ1P4nYMOpioNRm9on7tB91yldf+IFWMOJ/E8N/4uM/T6rkzwJI0gm+3sqn+sL1aaWzfDfBGrxGhGlMmq7yYLf8AJzB6rWyz18l0/wCDnC4FbFEahtJh3sc1T7UvZOFlenT6AWr/ABWfHDKw5voD/wAzD+S2dp+i0H4zVHf2WiBOU4gT5ilUyg/U+iacZ24+hKhSsiVEJQgyISwhACmYXBg3e4sbuSPtzPkCoiya79deaZVufYZ7HY2kxrYY0PLRyIbm7x3OoS1nk1sc11DhOPBD3aDvHtHkw5Z+n1XHOwdbLjqTju7J6vBA+q6rw+nDHs5PcR/DIv53+hRlN40sMuPkiz4hxE5HFgDnAWHMrXh2hxeRoLWtq28JzFnoRBKh8X4zUw9RlFtEu7yo1gqH5Gl5AE+pVthm40DNGHMBzpJuMtgJixPNctnT0sZ33ZP+rfhOOq1WB1WmKbgPFBJaT+6SASPMKYMWAtaxXaHEUw7PSp1Mpgim/wAXyB2h6HRPcOrOqjOWPpz+B4hwUyquOu2yDESouMcYTVGycrusPNFRfbBvywNbR73+krOmH5SKgHIcjIUbDcQp94WZvEIHvy5prieM7thqFxIJhkmS46ZgNhrpslJ2nLqJGDqB0naR7D+gWq9v+ITSAbu51ueQSB/udqrqkT3TmgwS035Wgae/otI4jUdVD8MRFVp7ymARLiQ7M1hm7o8QG4kDZb+HHrbl82Wrpz5w9kubSNv5pyoCJB26QZmL7jVNQtUeyv19veLrFKhMERCVbL2N4EMQ+m5xIH9qpU2xBBy06tepPkykP9wSCsPAMT3dSqaLgym0Oe42ABcGjXUydOQJUM4N+TvMjizUuDXFrbkeJ0Q2SDqdl6S4lgG4iiaL5yOLcwacuZrXtcWEj8LsuUjcOKfw+FY1gphjWsAyhgaAwN0jKLRGyfSd15eSK17T8OGHxdeg35adVwb/AAE5mjzDSB6KrSVCISpEgRKiEIN0z4j14pUh+8XezY/Nc0qsvzW//EAz3Q3DHGPK8/f6LSDg3yZadBNtyJAjnpZOeojfdRRZegexuF7rA4dhEHumucDrneM7p6y4rknYvsu/FYljalN3ctOarMt8OVxDf9RaB5FdwBVSJypblav8UKM8NqmJyPou8v8AEayfZ5W1tK1/4i1SzhuIIGrWNvyfVY0n2JTKODISoUtQhASoIiEJUGRKAhSsFSBMlzQOsmTNhAFxJE9EF6bJ2S4W0PbWdUYA1zTBJnMHDLEC5mRruuk4TGU3MFTM2QQKkOkDMImT+EnL7LlGGxOaZqmAQAGCwJDhcuyjQarY24plPDiDBr5gHE6UmkgvPIF1hv4TyW848XJlz/s232thcwNpPlOnmogwtYkDumiPxZGT9QoXYztQKzcj7VWWg/jabhzb3cALjpPltH96H9krhzx109nwefOT/Gm8LgCLkCeYDR9gLLOvShD+JHkolbEl2qytaW5ZXtmakLF8usPNR8ynYXD2LjeyMU59Rrn92sfVLpcSx2Wixtx+++wkuzBw9DzT3GMMarG1BmmkMpYdWwYMj0n+igd+9gY5hg57mxI0tf191YU3uzDxSZ8XXMJk+qrW2FSOGE5nAzqRHQWH81r3a7hzSQXCHMhwLbOyg2ewnZuYy0+hC2zBUpOYW5jkVW9rS0Na4i4cQD+6RLh5QCfRa+HLXTHzY77c/q4jvD3VdjXz4RUuHToCTM69bx6rWcTh3BxbljKSI9VtmEqNc4SRZ0wLw0Ot62t/EnMVhmSTI/pb8lve2eGLSXUyNQsFacSyzZVhUroXa/hnw00sEBUp5Xms999TLGtDxy8Mt9FoHw57PjE4ppdBZSIe5p3A0sdWzbzhdudY/r0Qk9h91lOp5D0TFMp6VIeZeI459eq+vU+eq4vdGgLjMDoNB0AUZdM+I3YYUw7F4VsMEmrSGjRqajBs3m3bUWmOaEKrCxu4xQlQpURIskiA7VxbgArxLMwLHC+8XAnqXR5A9FZ8K7KsbTiIeXPcXb5nulzp6wPKBdbLhcMGtA5R9lIkBbcpOo5uNvtUYLhTKHeZfxwbdBAH1d7rIKViak6bKIAo2vWmdNUXb9gdgMSHEgZGkRza9rhPSQJ6SruVqHxae4YENaCc9emHRu0MqVIjcSxp9EKjjKVCVJZEqEIMkJUIQAn8OBq4nLcQNTPLltfpvomFkSgk2gS/wAAZ3AADmSAGjzzfTdT+02InEvaPkpju2gaBtJmQADYS0u83JrssAcTTJ0pk1PVjS4ecuDQq7vZIc7eZ9dfoU067TsA1r3tbJHjpiOoJH2n2XS+zXFaj+8pucSR42ZjJyzDh5ToNr9FzTDPyPFrteDtOaRbzvHoV0bscwmpVeRGYNAM2LPEWxyPMKvcTLrKaXQxBKzL0wRBIKya0kwFw2dvUxy6SsHSLnR7q/bS8MdFFwGHDR1Vg1KIzu2h1MNZzebg4HrOUj6lSW+B06mQPaJUjF0stVzY0e5w6teCfuXD0RUsTaxEytNfjHa0a5oaHNIh0/wA1z3t1xdp3tdoANyTrbbwiJ6hbjhXgh9IGGxlPNp2I9SAuPcYc4PcyoLsqVGEDQQREeRzehiyvxzXSPJdotDGFpLhoBbnmiAfMXPIQsjxIxCXhPB6uJqilSALiDvAAG56aac50BTHEOH1KDzTqsLHiJaeoB1FjrstWcqPUeTcrFEJS0xYG4MdYnTnofZCne/h1g6AwVGrSHzsIJI8UhxDx/va4xOpWwVBzUfgmAZhsPToUxDaYtuZJLnEnmXOJ9Vkak3Pop2WmdN99FJDbqCwwVPF9kEZeLlcT+JfZhuErNq0hFKsXeAaU6guWDk0gyBtDhoAu4V2brWu3WGa/AYkPFm0nvHR9Npe0j1Eep5rWdxhvhk4CkSpFm6CtCEAoSKx6hdUUd9ZYuqJp71SdDOholDUgNkEyESqft5ie74fiHCMxYWBx1AqEMdB2JBKt6TVz74uurxRY2TQN3QP/AJZ8IdvpoOcqoX1y5Cn4vg+IpU21alCoxjzDXPYWgnle40JE6xZQVLQiVCEAISwhBkSoSoJIwGJNN0jcAemZp/6hYhwAuOo8+cJttr/T+aWprPO/ujZJOGrmR0N+e15PkuncDqd26jTAAk5ndA+YHu4281y2jIII0sT5AzH00XWaVOazco1c0z0Gk+xRbdahTXLdX2KoTfdHDqN8x9E6dVKbQJiFz5R2Y3o/TcplNRKVI8lOpMUHUTH4AVIIs4aH8j0Wt1aFVjsr2ENFTLOocxwGV0i1nS2NbhbohrAQZ0+/RXjbOmeU+uacPxDhVxTXfM2cv8LHNOvMyPbzWmdt8K5+OcGNk1WteGjUu7sF8Dc+AmN56rtVbs5hnue804dUaWuIe8S0iDaYBsLxsmqHZWgzEHE+MuIaMpILIbGWBGoIkHW5vFlpLN7RZdaUPY7sd/ZDSeWNNR2fvXm5a0N8LKZ/icJ55egVn2x7KUsa2ZDKgY8B0WkthpdvA8Pstkr1NlCqC8lHIuLU+G/DnA0wM7XVSCSS8mDcEDKNhEe/NbLU4ThXFrzh6RcwODTlAyhwggAW0snmP1/kkfI9U9jjGOIeTYalNZYEfVZMBkzzWJP9EFTRVjRqWChZdypdAWQSD2qxtahhn1qNNtR1MZi1xPyD5iIuSBJj909Fx7tL8QcRi6Xc5GUmOjPkJJfBmJOjeY35xIPbMdWY2m99V7WsDHZiTADYvK8xMFhPIKonUpUiVCFEQhCQekSLrHLdYd5dZ0XTfqiHYsMHSaR4hKddgWHmExw8kyBsVOy2RtGkP+xn8JB87FIaUahOvHVOMq7G6OQuLnvxcrNGDaw3c+q0s6ZQS4+xj/UuOlq9D9suyFPHtZ4zTdTzZYu3xZZkf6QuVdquwGJwrWva11VkeMsE5HDmBfKdQfMHrp1YXppiEpCFKgAhKlayUBiApnDuHurODWkdSdhMSQLxfYFP4LhpdBcCBOugMXLZOhj7FdS7I/DoMe2tXc6ADlbIzGQRfwg07GIkzJBAV8dd5IuW7rH251i+yWIpuDHt8Z+UAF2awPhj5ryIEuMSBF1sHCvhVi6kGq6nRbfWXvidmCBe5uRqLbLtdLDNaA1gAAEAcvVY1bKLlPgky+1zzF/DXBtLQ0VbahryS60XLgQ28G3lHK44fTY0GlTEilDHPuQXtEFgcRLssAE87agq4FWH5cjnGRDrHICIlxJtrpr0TOCpZgNhH3Syz+Kw8f1lhsLNzorGmwBEWhKAsXQylZSsQEqlRDeyyxD4hvJLRF/JRsX8x9Psn8L6eZUTmdRKadCWz0SvcfZQqFXvLgyFNetcwmL7rEVaJmC4Pb5PuYG15HoiU+PS7FO6HHfdZd7PJYVje260jKm6h1SBkCPc8ynC0LCQTqqSUUxzT7W2TLQnm6JpqJxnDNqYetTeQGvpVGknQAsIzX5a+i81A2C9O4vCsqU30qglj2OY4HQtcCD9CvMTdB5BMoEIQgyISoSN6BFVOB/NNDLAy3WbT7FTFrHA1AD0NlcU+hWuB5GnNX1C4B5hUyvRa9Loo5U0Cd1GqMjVScFKtaCs+/hMk7JA0SmWlH2n7D4TGgujuq3/ANjQL/xN0cub8W+G2KouhrDVbAOdsQTFxBM6rtIaNQU4KtoKcy0Vx66efqPYvEmpTpPYaJqyKbqoc1rnAE5JAMOIBiVL7P8AY7EVsQ/D5RTdTnO585WxECWgyTIjmu44hjHxnaHZXNcJ2e0y1w5EJymRmtF9faFpM9dyMeGV6t6a72c7IU8NGd/eEH5Yhki+aNSfotmdJsE0HXHmplFkSf1Czzytu63wwmM6Y0mkTPOQse5lxcfIfT9eqfKJWfJfFTY6i5rs7RJDmmJygxsXH5WgkOOuhEXUp1MDQQDf3UjEMkQNRp0VfTxb87mOZ4IaWuBEyZzAgmwFj667BXtU6PgJUMh2hmPf2SwkuFCEkpJU2meoanyUav8AMU7TfB9FEqVPGf1sn8KezrQswsGrMJKI5az2kPd1qNW3immfMeJn/dbM5Ufa2jmwzjF2Frx/pIn/AI5lKomU3Nc0GYlGW6gcCrBzBurdxbFvbotse4zymqaceqyDU2+mCsw2R1VRnYAE/TZZMNBClt0TSqO1QqjBYo0j4xQqEHU2aSY/ey5o6wvOi9Fdrqjm4LFOa6C3D1iD5Uyfey87KoljCClSIMiEIQHdMDWtlOuoKsqGhBWl4fEu8IJhzYMrbsNXlodvrHKyzlbWJIIKt+GVZbB2VSy/6/XRWmGbBEfrmrY5JxTNRx3TxqBDiCEkxDlKAdrrMrHKUlBpyrMVeiIWJ9EGxe8ckzUrFokDSD9U+cptEdUzWpjKYuqxTUzCvDiORuPW4U6Vr3D3uDegPh5g/wBVsDNJ+inKaq4HJMyyWLiJAUKYVHQOv5KlqHx5pIs6WjLB2A3uLwrutSBvEmPOfTdQ2YQn5tzOojXoPp0RBUB9Cp3T8j+7Lpy1QG2cR80T90VOI1Wx/hirmqsY2DleKZb4qr7XIOwbFxoJIvoEQmK2Fa6SbToUbCFg8VTrh5pOzZHupukOb42GHAFwGYA2kWsUPfGqar8KkS5ocGVBUABIOcSMxtfU2M7cgsGVnHvH1CHtJb3bGgBzREG+5JvqREaKbj+LmX6zOIUGhVmo8co+ydxWHIu0zaSPxAdR+aqOF1pxNYchSPvnH/VRuy6bcZZuNlYVmmqZTqdQCq/i96VQc2OH0U9yruLO/wAJ/wDC77IONb7M44kADXqtjBdmmRZaFwl+WCNtuS3Xh9Qvbm5Wnef5LTFGf6lsnXZOxCxDt9jqnAPUbK2VOMvssMQXZT3cZrAZpIExcgEEgTMA3UrDCCARr+L7D1krW+1/EDgKrcS7O7D1YY9jGg5KzQclSSRZzZYR+40gggAvaK1P4rdp6rCcC1gDalNj3VMxLnMLnAsDY8IlhBMmRyXLFbdqeNuxmIfXcMoMNa2ZLWN0BIAk6k+aqFQgSJUFAIhCEB0rBXDCf2fyWzcL+X6eiVCynttfS5w+rfIKzoHxgdPzCRC1ntz+X0nlMOKRCIkiAUqFDSMHG6yhCEA07VKR4T6oQrKGsCP8MfxK6aUIUZrxZBYvF0IUKYvaLLGpqB0QhBM3CyYxTyGAjk7YH7oQgzuH+UeQULiVJoDXAAHNE+6EICrDyKTnj5oid4BCraTAMW5wEF9CkXdTmfeNBqUISy9NMPa/pp4IQoqmLlUdoTFB/wDCfsUIQqNApVCBY6hbz2Z/y/NCFrPbK+lpTGqcooQqZ09UphwLSJa6xHMGxHsoHF6Yr8If3oz5sF3hnd7aPeB3mHAHzCEJUo84uWCVC0IJEIQQQhCA/9k=',
                email: 'zelotype.3@gmail.com',
                password: '1234567'
            },
            passwordType: true,
        }
    }

    handleDeleteImageUrl = () => {
        this.setState(prevState => ({
          ...prevState,
          member: {
            ...prevState.member,
            imageUrl: null,
          },
        }));
      };

    toggleChangePasswordType = () => {
        this.setState(prevState => ({
            passwordType: !prevState.passwordType,
          }));
    }

    render(){
        const { member, passwordType } = this.state;
        const { history } = this.props;
        return(
            <div className="container pt-3 pb-5 mt-3">
                <div className="d-flex flex-row justify-content-between">
                    <h2>โปรไฟล์</h2>
                </div>
                <hr />
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="firstName">ชื่อ</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="form-control"
                                    placeholder="ชื่อ"
                                    value={member.firstName}
                                    onChange={this.handleChangeFirstName}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lastName">นามสกุล</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="นามสกุล"
                                    value={member.lastName}
                                    onChange={this.handleChangeLastName}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="image">รูปโปรไฟล์</label>
                            { member.imageUrl ? (
                                <div>
                                    <ImageWrapper>
                                        <Image src={member.imageUrl} />
                                    </ImageWrapper>
                                    <br />
                                    <button
                                    className="btn btn-link text-danger"
                                    type="button"
                                    onClick={this.handleDeleteImageUrl}
                                    >
                                    ลบภาพ
                                    </button>
                                </div>
                            ) : (
                                <ImageUploader
                                    prefixFileName="profile"
                                    onUpload={this.handleUploadImage}
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">อีเมล</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control w-50"
                                placeholder="อีเมล"
                                value={member.email}
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">รหัสผ่าน</label>
                            <div className="d-flex flex-row">
                                <input
                                    type={passwordType ? 'password' : 'text'}
                                    className="form-control w-50 mr-3"
                                    id="pass"
                                    placeholder="รหัสผ่าน"
                                    value={member.password}
                                    onChange={this.handleChangePass}
                                />
                                <IconButton onClick={this.toggleChangePasswordType} aria-label="Edit">
                                    <VisibilityIcon />
                                </IconButton>
                            </div>

                        </div>
                        <div className="row">
                        <div className="col-2 text-center mr-3">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                onClick={() => {
                                    history.push("/")
                                }}
                            >
                            ยกเลิก
                            </button>
                        </div>
                        <div className="col-2 text-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                onClick={this.handleSubmit}
                            >
                            บันทึก
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Profile;