package kh.Dionysus.Dao;

import kh.Dionysus.Dto.JjimDto;
import kh.Dionysus.Utills.Common;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JjimDao {
    private Connection conn = null;
    private Statement stmt = null;
    private ResultSet rs = null;
    private PreparedStatement pStmt = null;

    public List<JjimDto> jjimSelect(String user_id) throws SQLException {
        List<JjimDto> list = new ArrayList<>();
        String sql = "SELECT * FROM JJIM_TB WHERE USER_ID = ?";

        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1, user_id);
            rs = pStmt.executeQuery();
            while (rs.next()) {
                JjimDto vo = new JjimDto();
                vo.setUser_id(rs.getString("USER_ID"));
                vo.setAlcohol_name(rs.getString("ALCOHOL_NAME"));
                vo.setJjim(rs.getBoolean("JJIM"));
                list.add(vo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        Common.close(rs);
        Common.close(stmt);
        Common.close(conn);
        Common.close(pStmt);
        return list;
    }

    public boolean jjimUpdate(JjimDto dto) throws SQLException {
        String sql = "UPDATE JJIM_TB SET JJIM = ? WHERE USER_ID = ? AND ALCOHOL_NAME = ?";
        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setBoolean(1, dto.isJjim());
            pStmt.setString(2, dto.getUser_id());
            pStmt.setString(3, dto.getAlcohol_name());
            if(pStmt.executeUpdate() > 0) return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
