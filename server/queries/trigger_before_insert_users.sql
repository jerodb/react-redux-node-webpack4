DROP TRIGGER IF EXISTS before_insert_users;
DELIMITER %%

CREATE TRIGGER before_insert_users
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
  DECLARE uuid varchar(36);
  
  SET uuid = uuid();
  SET new.id = unhex(replace(uuid,'-',''));
  SET new.id_str = uuid;
END
%%

DELIMITER ;