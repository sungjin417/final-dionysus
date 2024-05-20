package kh.Dionysus.Dao;

import kh.Dionysus.Dto.ReviewDto;
import kh.Dionysus.Utills.Common;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ReviewDao {
    private Connection conn = null;
    private Statement stmt = null;
    private ResultSet rs = null;
    private PreparedStatement pStmt = null;

    public List<ReviewDto> reviewSelect(String alcohol_name) throws SQLException {
        List<ReviewDto> list = new ArrayList<>();
        String sql = "SELECT * FROM REVIEW_TB WHERE ALCOHOL_NAME = ?";

        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1, alcohol_name);
            rs = pStmt.executeQuery();
            while (rs.next()) {
                ReviewDto vo = new ReviewDto();
                vo.setUser_id(rs.getString("USER_ID"));
                vo.setAlcohol_name(rs.getString("ALCOHOL_NAME"));
                vo.setReview(rs.getString("REVIEW"));
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

    public boolean reviewInsert(ReviewDto dto) throws SQLException {
        String sql = "INSERT INTO REVIEW_TB (USER_ID, ALCOHOL_NAME, REVIEW) VALUES (?, ?, ?)";
        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1, dto.getUser_id());
            pStmt.setString(2, dto.getAlcohol_name());
            pStmt.setString(3, dto.getReview());
            if(pStmt.executeUpdate() > 0) return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean reviewUpdate(ReviewDto dto) throws SQLException {
        String sql = "UPDATE REVIEW_TB SET REVIEW = ? WHERE USER_ID = ? AND ALCOHOL_NAME = ?";
        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1, dto.getReview());
            pStmt.setString(2, dto.getUser_id());
            pStmt.setString(3, dto.getAlcohol_name());
            if(pStmt.executeUpdate() > 0) return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean reviewDelete(String user_id, String alcohol_name) throws SQLException {
        String sql = "DELETE FROM REVIEW_TB WHERE USER_ID = ? AND ALCOHOL_NAME = ?";
        try {
            conn = Common.getConnection();
            pStmt = conn.prepareStatement(sql);
            pStmt.setString(1, user_id);
            pStmt.setString(2, alcohol_name);
            if(pStmt.executeUpdate() > 0) return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
