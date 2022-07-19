import AdminTitle from "../title/admin_title"

function Admin(props){
    
    return (
      <div>
        <AdminTitle />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'center',
            gap: "5px",
          }}
        >
            <span>Here is your Admin custom component.</span>
            <input
              type="button"
              value="Component"
              onClick={() => props.auth("Kevin")}
            />
        </div>
      </div>
    );
}

export default Admin