module CipherHelper
  def encrypt_zero_ssl_api_key(zero_ssl_api_key)
    encrypt(zero_ssl_api_key, Rails.configuration.zero_ssl_api_key_encryption_key)
  end

  def decrypt_zero_ssl_api_key(zero_ssl_api_key)
    decrypt(zero_ssl_api_key, Rails.configuration.zero_ssl_api_key_encryption_key)
  end

  private

  def encrypt(password, key)
    cipher = OpenSSL::Cipher.new(Rails.configuration.encryption_algorithm)
    cipher.encrypt
    cipher.key = secret_key(key)
    crypt = cipher.update(password) + cipher.final
    Base64.encode64(crypt)
  end

  def secret_key(key)
    Digest::MD5.hexdigest(key)
  end

  def decrypt(enc_password, key)
    cipher = OpenSSL::Cipher.new(Rails.configuration.encryption_algorithm)
    cipher.decrypt
    cipher.key = secret_key(key)
    temp_key = Base64.decode64(enc_password)
    crypt = cipher.update(temp_key)
    crypt << cipher.final
    crypt
  end

  def hash_basic_auth_password(password)
    '{PLAIN}'.concat password # using plaintext passwords for performance
  end
end
